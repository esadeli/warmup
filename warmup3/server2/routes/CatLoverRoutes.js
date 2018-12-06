'use strict'

const express = require('express')
const router = express.Router()
const CatLoverController = require('../controllers/catlover')
const {add, get, list} = CatLoverController

router.post('/',add)
      .get('/list', list)
      .get('/:id', get)

module.exports = router