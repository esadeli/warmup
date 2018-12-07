'use strict'

const axios = require('axios')
const redis = require('redis'),
      client = redis.createClient()

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
    // check if cache exist
    client.get('listcatlover', function(err,reply){
      if(reply) {
        let data = JSON.parse(reply)
        res.status(201).json(data)
      } else if(reply === null){
        axios({
          method: 'GET',
          url: 'http://localhost:5021/user/list',
          headers: {
            serverkey: process.env.SERVERKEY
          }
        })
          .then(user => {
            // we're goint to cache the data
            client.set('listcatlover', JSON.stringify(user.data), 'EX', 5)
            res.status(201).json(user.data)
          })
          .catch(err => {
            res.status(500).json(err.response.data)
          })
      } else if (err) {
        res.status(500).json({
          msg: 'ERROR Cache data',
          err: err
        })
      }
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