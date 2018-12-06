'use strict'

const CatLover = require('../models/catlover')

module.exports = {
  add: function (req,res) {
    CatLover.create({
      name: req.body.name,
      avatar: req.body.avatar,
      address: req.body.address,
      city: req.body.city,
      zip: req.body.zip
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
  },
  update: function (req,res) {
    CatLover.findOneAndUpdate({
      _id: req.params.id
    },{
      name: req.body.name,
      avatar: req.body.avatar,
      address: req.body.address,
      city: req.body.city,
      zip: req.body.zip
    },{
      runValidators: true
    })
      .then(catlover=> {
        res.status(201).json({
          msg: 'Catlover data updated',
          data: catlover
        })
      })
      .catch(error => {
        res.status(500).json({
          msg: 'Error Update catlover Data',
          err: error
        })
      })
  },
  remove: function (req,res) {
    CatLover.findOneAndRemove({
      _id: req.params.id
    })
      .then(catlover=> {
        res.status(201).json({
          msg: 'Catlover data deleted',
          data: catlover
        })
      })
      .catch(error => {
        res.status(500).json({
          msg: 'Error Delete catlover Data',
          err: error
        })
      })
  }
}