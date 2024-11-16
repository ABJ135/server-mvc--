const express = require('express')
const router = express.Router()

const controller = require('../controller/book.controller')



router.post('/create',controller.postBook)

router.get('/show',controller.getBook)

module.exports = router