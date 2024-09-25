const express = require('express')
const app = express()
require('dotenv').config()
const PORT = process.env.HOST || 3000;
const cors = require('cors')
const messageRouter = require('./route')
app.use(cors())
app.use(express.json())
app.use('/api', messageRouter)
app.get('/', (req,res) => {
    const data = req.body.data
   return  res.json({Data: data})
})



const startApp = async () => {
    try {

        app.listen(PORT, () => {
            console.log(`Listening on http://localhost:${PORT}`)
        })
    } catch (err) {
        console.error(err)
    }

}

startApp()