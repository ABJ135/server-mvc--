const express = require('express')
const router = express.Router()

const controller = require('../controller/book.controller')



router.post('/book',controller.postBook)

router.get('/book',controller.getBook)

module.exports = router