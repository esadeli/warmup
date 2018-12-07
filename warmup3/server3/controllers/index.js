'use strict'

const axios = require('axios')

module.exports = {
  register: function (req,res) {
    axios({
      method: 'POST',
      url: 'http://localhost:5020/register',
      headers: {
        serverkey: process.env.SERVERKEY
      },
      data: {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
      }
    })
      .then(user => {
        res.status(201).json(user.data)
      })
      .catch(err => {
        res.status(500).json(err.response.data)
      })     
  },
  login: function (req,res) {
    axios({
      method: 'POST',
      url: 'http://localhost:5020/login',
      headers: {
        serverkey: process.env.SERVERKEY
      },
      data: {
        email: req.body.email,
        password: req.body.password
      }
    })
      .then(user => {
        res.status(201).json(user.data)
      })
      .catch(err => {
        res.status(500).json(err.response.data)
      })
  }
}