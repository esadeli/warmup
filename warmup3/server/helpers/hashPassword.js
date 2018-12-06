'use strict'

const bcrypt = require('bcrypt')

function hashPassword(input, cb){
  bcrypt.genSalt(Number(process.env.SALT), (err,salt)=> {
    if(!err) {
      bcrypt.hash(input,salt,(error, hash)=> {
        if(!error) {
          cb(hash,null)
        } else {
          console.log('error generate hash password-', err)  
          cb(null,error)
        }
      })
    } else {
      console.log('error generate bcrypt salt-', err)
      cb(null,err)
    }
  })
}

module.exports = hashPassword