const crypto = require('crypto-js')
const pool = require('./db')
class MessageController {
    static generateUrl() {
        return Math.random().toString(36).substring(2, 8);
    }

    async readMessage(req, res) {
        try {
            const {urlSuffix, password} = req.body
            const {rows} = await pool.query(`SELECT message FROM messages WHERE url = $1`, [urlSuffix])
            if(!rows.length) {
              return  res.json({error: 'Сообщение не найдено'})
            }
            const decryptedMessage =  crypto.AES.decrypt(rows[0].message, password).toString(crypto.enc.Utf8);
            if(!decryptedMessage.length) {
                return res.json({error: 'Неверный пароль'})
            }
            return res.json({message: decryptedMessage})
        } catch (err) {
            console.log(err)
            return res.sendStatus(500)
        }
    }

    async sendMessage(req, res) {
        try {
            const {message, password} = req.body
            const encryptedMessage = crypto.AES.encrypt(message, password).toString();
            const url = MessageController.generateUrl()
            const insertMessage = await pool.query(`INSERT INTO messages (message, url) VALUES ($1, $2) RETURNING *`, [encryptedMessage, url])
            res.json({url: `http://localhost:5173/read/${url}`});
        } catch (err) {
            console.log(err)
            return res.sendStatus(500)
        }
    }

}

module.exports = new MessageController()
