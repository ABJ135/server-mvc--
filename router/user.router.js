const express = require('express')
const router = express.Router()

const controller = require('../controller/user.controller')

router.post('/createUser',controller.createUser)

router.get('/getAllUsers',controller.getAllUsers)

router.get('/getUserById',controller.getUserById)

router.put('/updateUser',controller.updateUser)

router.delete('/deleteUser',controller.deleteUser)

module.exports = router