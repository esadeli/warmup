'use strict'

function isServer(req,res,next){
  if(req.headers.serverkey === process.env.SERVERKEY) {
    next()
  } else {
    res.status(403).json({
      msg: 'You don\'t have server authorization '
    })
  }
}

module.exports = isServer