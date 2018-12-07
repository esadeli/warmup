'use strict'

const express = require('express')
const router = express.Router()
const IndexController = require('../controllers/index')
const { register, login } = IndexController

router.post('/register', register)
      .post('/login', login)

module.exports = router