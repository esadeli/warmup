'use strict'

const express = require('express')
const router = express.Router()
const UserController = require('../controllers/user')
const {register, login, getcredentials} = UserController
const isServer = require('../middlewares/isServer')

router.post('/register', isServer, register)
      .post('/login', isServer, login)
      .get('/getbasicdata', isServer, getcredentials)

module.exports = router