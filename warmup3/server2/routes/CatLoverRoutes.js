'use strict'

const express = require('express')
const router = express.Router()
const CatLoverController = require('../controllers/catlover')
const {add} = CatLoverController

router.post('/',add)

module.exports = router