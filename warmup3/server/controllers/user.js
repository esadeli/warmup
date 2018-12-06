'use strict'

const User = require('../models/user')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

module.exports = {
  register: function(req,res) {
    User.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password
    })
      .then(user => {
        jwt.sign({
          userid: user._id,
          name: user.name,
          email: user.email
        },process.env.SECRET_TOKEN,(err,token)=> {
          if(!err) {
            res.status(201).json({
              msg: 'Registration success',
              token: token
            })
          } else {
            res.status(500).json({
              msg: 'Error get token',
              err: err
            })
          }
        })
      })
      .catch(error => {
        console.log('error user registration', error)
        res.status(500).json({
          msg: 'Error user registration',
          err: error
        })
      })
  },
  login: function (req,res) {
    
  }
}