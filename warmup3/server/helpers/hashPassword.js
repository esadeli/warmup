'use strict'

const bcrypt = require('bcrypt')

function hashPassword(input){
  bcrypt.genSalt(10, (err,salt)=> {
    if(!err) {
      bcrypt.hash(input,salt,(err, hash)=> {
        if(!err) {
          // console.log('hash----', hash)
          return hash
        } else {
          console.log('error generate hash password-', err)  
        }
      })
    } else {
      console.log('error generate bcrypt salt-', err)
    }
  })
  return ''
}

// testing
console.log(hashPassword('yes'))

module.exports = hashPassword