'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const CatLoverSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Name should not be empty']
  }, 
  imageurl: {
    type: String,
    required: [true,'Image url should not be empty']
  },
  petname: {
    type: String,
    required: [true, 'Pet name should not be empty']
  }
}, {
  timestamps: true
})

const CatLover = mongoose.model('CatLover', CatLoverSchema)

module.exports = CatLover