'use strict'

require('dotenv').config()
const express = require('express')
const app = express()

const IndexRouter = require('./routes/IndexRouter')

app.use(express.urlencoded({extended: false}))
app.use(express.json())
app.use('/',IndexRouter)

app.use('/', (req,res) => { res.status(200).json({msg: 'Main Server OK'})})
app.listen(process.env.PORT || 3000, ()=> { console.log(`Listening to PORT ${process.env.PORT}`)})
