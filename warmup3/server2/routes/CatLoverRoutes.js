'use strict'

const express = require('express')
const router = express.Router()
const CatLoverController = require('../controllers/catlover')
const {add, get, list, update, remove} = CatLoverController
const isServer = require('../middlewares/isServer')
const isAuthorized = require('../middlewares/isAuthorized')

router.post('/',isServer, isAuthorized, add)
      .get('/list',isServer ,list)
      .get('/:id' ,isServer ,get)
      .put('/:id',isServer, isAuthorized ,update)
      .delete('/:id',isServer, isAuthorized ,remove)

module.exports = router 