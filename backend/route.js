const { Router } = require ("express")
const router = Router()
const MessageController = require('./controller')



router.post('/send', MessageController.sendMessage )
router.post('/read', MessageController.readMessage )

module.exports =  router;