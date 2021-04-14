const request   = require('request')

const geocode = ( address , callback) =>{


  const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+address+'.json?access_token=pk.eyJ1IjoicHJhbmF2bGFkb2xlOTgiLCJhIjoiY2tuZDNvcW9kMDRxbDJ2b3o0emloZ2p2NCJ9.tT6vGdxhuWGK19ENl5wwvg'

  request({url:url , json:true} , (error,response)=>{
      callback(undefined,response)
  }  )

}

module.exports = geocode


