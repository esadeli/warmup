'use strict'

const axios = require('axios')
const jwt = require('jsonwebtoken')

function isAuthorized (req,res,next) {
  if(req.headers.token) {
		jwt.verify(req.headers.token,process.env.SECRET_TOKEN, (err, decoded) => {
			if(!err) {
				// check user data user data
				axios({
					method: 'GET',
					url: 'http://localhost:5020/getbasicdata',
					headers: {
						serverkey: process.env.SERVERKEY
					},
					data: {
						userid: decoded.userid
					}
				})
				  .then(user => {
						// if user exist
						if(user) {
							next()
						} else {
							res.status(400).json({
								msg: 'User data not Found'
							})	
						}
					})
					.catch(err => {
						res.status(500).json({
							msg: 'ERROR Get basic data from main server',
							err: err
						})
					})
			} else {
				console.log('ERR Verified Token ---', err)
				res.status(500).json({
					msg: 'ERROR Verified Token',
					err: err
				})
			}
		})
	}
}

module.exports = isAuthorized