'use strict'

const express = require('express')
const router = express.Router()
const CatLoverController = require('../controllers/catlover')
const { add, list} = CatLoverController

router.post('/', add)
      .get('/list', list)

module.exports = router