'use strict'

const express = require('express')
const router = express.Router()
const UserController = require('../controllers/user')
const {register, login} = UserController

router.post('/register', register)
      .post('/login', login)

module.exports = router