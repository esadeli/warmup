'use strict'

const express = require('express')
const router = express.Router()
const UserController = require('../controllers/user')
const {register, login} = UserController
const isServer = require('../middlewares/isServer')

router.post('/register', isServer, register)
      .post('/login', isServer, login)

module.exports = router