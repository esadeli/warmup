'use strict'

const express = require('express')
const router = express.Router()
const CatLoverController = require('../controllers/catlover')
const { add, list, get, update, remove} = CatLoverController

router.post('/', add)
      .get('/list', list)
      .get('/:id', get)
      .put('/:id', update)
      .delete('/:id', remove )

module.exports = router