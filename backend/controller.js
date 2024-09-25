const crypto = require('crypto-js')

class MessageController {
    static generateUrl() {
        return Math.random().toString(36).substring(2, 8);
    }

    async readMessage(req, res) {
        try {
            const {urlSuffix, password} = req.body
        } catch (err) {
            return res.sendStatus(500)
        }
    }

    async sendMessage(req, res) {
        try {
            const {message, password} = req.body
            const encryptedMessage = crypto.AES.encrypt(message, password).toString();
            const url = MessageController.generateUrl()
            res.json({url: `http://localhost:3000/read/${url}`});
        } catch (err) {
            return res.sendStatus(500)
        }
    }

}

module.exports = new MessageController()
