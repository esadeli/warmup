'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const CatLoverSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Name should not be empty']
  }, 
  avatar: {
    type: String,
    required: [true,'Avatar should not be empty']
  },
  address: {
    type: String,
    required: [true, 'Address should not be empty']
  },
  city: {
    type: String,
    required: [true, 'City should not be empty']
  },
  zip: {
    type: String,
    required: [true, 'Zip should not be empty']
  }
}, {
  timestamps: true
})

const CatLover = mongoose.model('CatLover', CatLoverSchema)

module.exports = CatLover