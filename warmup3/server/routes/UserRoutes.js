'use strict'

const express = require('express')
const router = express.Router()
const UserController = require('../controllers/user')
const {register} = UserController

router.post('/register', register)

module.exports = router