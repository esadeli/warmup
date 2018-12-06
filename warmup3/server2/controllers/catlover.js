'use strict'

const CatLover = require('../models/catlover')

module.exports = {
  add: function (req,res) {
    CatLover.create({
      name: req.body.name,
      imageurl: req.body.imageurl,
      petname: req.body.petname  
    })
      .then(catlover=> {
        res.status(201).json({
          msg: 'Catlover data created',
          data: catlover
        })
      })
      .catch(error => {
        res.status(500).json({
          msg: 'Error Create catlover Data',
          err: error
        })
      })
  },
  get: function (req,res) {
    CatLover.findOne({
      _id: req.params.id
    })
    .then(catlover=> {
      res.status(200).json({
        msg: `Detail data of ${catlover.name}`,
        data: catlover
      })
    })
    .catch(error => {
      res.status(500).json({
        msg: 'Error get detail of catlover Data',
        err: error
      })
    })
  },
  list: function (req,res) {
    CatLover.find({})
    .then(catlovers=> {
      res.status(200).json({
        msg: 'List of catlovers data',
        data: catlovers
      })
    })
    .catch(error => {
      res.status(500).json({
        msg: 'Error get list of catlovers Data',
        err: error
      })
    })
  }
}