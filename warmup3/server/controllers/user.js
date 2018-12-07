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
              msg: 'Error Register get token',
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
    User.findOne({
      email: req.body.email
    })
      .then(user => {
        // check if password and hash is verified
        if(bcrypt.compareSync(req.body.password, user.password)){
          // get the jwt token
          jwt.sign({
            userid: user._id,
            name: user.name,
            email: user.email
          }, process.env.SECRET_TOKEN, (err,token)=> {
            if(!err) {
              res.status(201).json({
                msg: 'Login Success',
                token: token
              })
            } else {
              res.status(500).json({
                msg: 'Error Login get token',
                err: err
              })
            }
          })
        } else {
          res.status(400).json({
            msg: 'ERROR Login verified password',
            err: 'User is not found, please check your email and password'
          })
        }
      })
      .catch(error => {
        res.status(500).json({
          msg: 'Error user login',
          err: error
        })
      })
  }
}