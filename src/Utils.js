const request = require('postman-request')
// console.log('---- Starting -----');


// setTimeout(()=>{
//     console.log('2 second timer')
// }, 2000)

// setTimeout(()=>{
//     console.log('0 second timer')
// }, 0)

// console.log('---- Finishing -----');

const addressForecast = (address , res )=>
request({url:`http://api.weatherstack.com/current?access_key=533edc9452ba4de12ad7e8b3ea93bb84&query=${address}`,json:true},(error, response, body)=>{
    // console.table(body.current);
    // console.log(`It is currently ${body.current.temperature} degree out. It feels like ${body.current.feelslike} degree out.`)
    res.send(body)  
})

module.exports ={
    addressForecast
}

