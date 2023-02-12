const express = require('express')
const router = express.Router()
const {scheduler, triggerFunction} = require('./controller')


router.post('/create/text' , scheduler)
router.get('/get',triggerFunction)
module.exports = router