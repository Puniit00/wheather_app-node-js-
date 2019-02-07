const request = require('request')

var geocodeAdress = (address,callback)=>{

    var address =address

    request(`https://www.metaweather.com//api/location/search/?query=${address}`,
    function(error, response, body ){
        body = JSON.parse(body)
        if(error)
        {   callback('unable to connect to our servers')
        }
        else if (body === '')//resolve this
        {
            callback('unable to find that address')
        }
        else if (response.statusCode === 200){
        callback(undefined,{
            latt_long:body[0].latt_long
        })
        }
    }
    );
};

module.exports.geocodeAdress = geocodeAdress