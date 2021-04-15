const request = require('request')
console.log("inside here")
// const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoicHJhbmF2bGFkb2xlOTgiLCJhIjoiY2tuZDNvcW9kMDRxbDJ2b3o0emloZ2p2NCJ9.tT6vGdxhuWGK19ENl5wwvg'

// request({url:url ,json:true},(error,response)=>{
//     const lat =  response.body.features[0].center[1]
//     console.log("latitude is " + lat)

//     const long =  response.body.features[0].center[0]
//     console.log(" longititude is "+long)



//     const geo =  response.body.features[0].geometry.
//     console.log(geo)
// })


const geocode  = (address,callback) =>{

    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+address+'.json?access_token=pk.eyJ1IjoicHJhbmF2bGFkb2xlOTgiLCJhIjoiY2tuZDNvcW9kMDRxbDJ2b3o0emloZ2p2NCJ9.tT6vGdxhuWGK19ENl5wwvg'


    request({url:url , json:true}  , (error,response)=>{
        if(error){
             console.log("error occured....")
            callback('unable to connect',undefined)
        }
        else if(response.body.features.length === 0){
            callback('unable to find location',undefined)
        }
      

        else{
            callback(undefined,
               {
                lat: "Latitude " + response.body.features[0].center[0],
                 long: "Longitude " + response.body.features[0].center[1],
                 location: "location " + response.body.features[0].place_name
               }
            )
        }

    })

}

 module.exports = geocode


// geocode('india',(error,data)=>{
//     console.log('error  ' ,error)
//     console.log('data  ' , data)
// })
