'use strict'

const axios = require('axios')

module.exports = {
  add: function (req,res) {
    axios({
      method: 'POST',
      url: 'http://localhost:5021/user/',
      headers: {
        token: req.headers.token,
        serverkey: process.env.SERVERKEY
      },
      data: {
        name: req.body.name,
        avatar: req.body.avatar,
        address: req.body.address,
        city: req.body.city,
        zip: req.body.zip
      }
    })
      .then(user => {
        res.status(201).json(user.data)
      })
      .catch(err=> {
        res.status(500).json(err.response.data)
      })
  },
  list: function (req,res) {
    axios({
      method: 'GET',
      url: 'http://localhost:5021/user/list',
      headers: {
        serverkey: process.env.SERVERKEY
      }
    })
      .then(user => {
        res.status(201).json(user.data)
      })
      .catch(err => {
        res.status(500).json(err.response.data)
      })
  },
  get: function (req,res) {
    axios({
      method: 'GET',
      url: `http://localhost:5021/user/${req.params.id}`,
      headers: {
        serverkey: process.env.SERVERKEY
      }
    })
      .then(user => {
        res.status(201).json(user.data)
      })
      .catch(err => {
        res.status(500).json(err.response.data)
      })
  },
  update: function (req,res) {
    axios({
      method: 'PUT',
      url: `http://localhost:5021/user/${req.params.id}`,
      headers: {
        serverkey: process.env.SERVERKEY
      },
      data: {
        name: req.body.name,
        avatar: req.body.avatar,
        address: req.body.address,
        city: req.body.city,
        zip: req.body.zip
      }
    })
      .then(user => {
        res.status(201).json(user.data)
      })
      .catch(err => {
        res.status(500).json(err.response.data)
      })
  },
  remove: function (req,res) {
    axios({
      method: 'DELETE',
      url: `http://localhost:5021/user/${req.params.id}`,
      headers: {
        serverkey: process.env.SERVERKEY
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