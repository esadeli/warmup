'use strict'

require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const db = mongoose.connection
if (process.env.NODE_ENV === 'test') {
  // testing database
  mongoose.connect('mongodb://localhost:27017/catlovertestdb', ({useNewUrlParser: true}))
    
} else {
  // local database
  mongoose.connect('mongodb://localhost:27017/catloverdb', ({useNewUrlParser: true}))
}

// check database connection
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', ()=> {
    console.log('Connected to database')
})

const app = express()

app.use(express.urlencoded({extended: false}))
app.use(express.json())

app.get('/',(req,res)=> { res.status(200).json({ msg: 'Server 2 OK'})})
app.listen (process.env.PORT || 3000, () => { console.log(`Listening to PORT ${process.env.PORT}`)})