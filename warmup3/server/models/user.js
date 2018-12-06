'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema
const isEmail = require('../helpers/isEmail')
const hashPassword = require('../helpers/hashPassword')

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
    unique: [true,'Email should be unique'],
    validate: {
      validator: (v) => {
        return isEmail(v)
      },
      message: input => `${input.value} is not a valid email!`
    }
  }
},{
  timestamps: true
})

UserSchema.post('validate', (doc, next) => {
  hashPassword(doc.password, (result,err)=> {
    if(!err) {
      doc.password = result
      next()
    } else {
      console.log('ERROR hash password', err)
      next(err)
    }
  })
})

const User = mongoose.model('User', UserSchema)

module.exports = User