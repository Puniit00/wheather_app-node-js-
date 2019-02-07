// const request = require('request')

// request  ({
//     url:'https://www.metaweather.com/api/location/search/?lattlong=36.96,-122.02',
//     json:true
// },(error,response,body)=>{
//    // console.log(JSON.stringify(body,undefined,2));
//   // console.log("Title:" + body[0].latt_long)
//   console.log(response.headers);
//     body = JSON.parse(body);
//     console.log(body[0].latt_long);
// });

var yargs = require('yargs')
const geocode = require('./geocode/geocode')
const wheather = require('./wheather/wheather')

var argv = yargs.options({
   a:{
    demand:true,
    alias:'address',
    describe:'Enter the adress you want to fetch wheather for',
    String:true
   }
})
.help()
.alias('help','h')
.argv;

geocode.geocodeAdress(argv.address,(errorMessage,results)=>{
    if(errorMessage)
    {
        console.log(errorMessage)
    }
    else{
        wheather.getWheather(results.latt_long,(errorMessage,results)=>{
            if(errorMessage)
            {
                console.log(errorMessage)
            }
            else{
                console.log(`It's currently ${results.actual_temperature},but it feels like ${results.apparent_temperature}`)
            }
        })
    }
})




