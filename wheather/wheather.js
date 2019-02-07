const request = require('request')

module.exports.getWheather = (latt_long,callback)=>{
    request({
        url:`https://api.darksky.net/forecast/16ef02c4dcc289e677276a33e247a408/${latt_long}`,
        JSON:true
    } ,(error,response,body)=>{
        body = JSON.parse(body)
       if (response.statusCode === 404)
        {
            callback('Unable to fetch wheather')
        }
       else if (response.statusCode === 200)
       {
        callback(undefined,{
            actual_temperature : body.currently.temperature,
            apparent_temperature : body.currently.apparentTemperature

        })
       }
       
    })

}