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
          msg: 'Error Create Catlover Data',
          err: error
        })
      })
  }
}