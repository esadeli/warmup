'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.schema
const isEmail = require('../helpers/isEmail')

const UserSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Name should not be empty']   
  },
  password: {
    type: String,
    required: [true, 'Password should not be empty'],
    minlength: [6, 'Password should not be less than 6 characters']
  },
  email: {
    type: String,
    required: [true, 'Email should not be empty'],
    validate: {
      validadtor: (v) => {
        return isEmail(v)
      },
      message: input => `${input.value} is not a valid email!`
    }
  }
},{
  timestamps: true
})


const User = mongoose.model('User', UserSchema)

module.exports = User