const path = require('path')
const hbs = require('hbs')
const express = require('express');
const { addressForecast } = require('./Utils')

const _publicDirectory = path.join(__dirname,'../public')
const _viewDirectory = path.join(__dirname,'../templates/views')
const _partialDirectory = path.join(__dirname,'../templates/partials')
console.log(_publicDirectory)


const app = express();
const port = 3001;

app.set('views',_viewDirectory)
app.set('view engine','hbs')
hbs.registerPartials(_partialDirectory)
app.use(express.static(_publicDirectory));


app.get('',(req,res)=>{
    res.render('index')
})

app.get('/help',(req,res)=>{
    res.render('help',{
        name:"Pankaj"
    })
})

app.get('/help/*',(req,res)=>{
    res.send('Help article not found')
})

app.get('/about',(req,res)=>{
    res.render('about',{
        name:"Pankaj"
    })
})

app.get('/about/*',(req,res)=>{
    res.send('About article not found')
})

app.get('/weather',(req,res)=>{
    if(!req.query.address){
        return res.send({
            error:'No address found'
        })
    }
    req.query.address && addressForecast(req.query.address,res)
    
})

app.get('/weather/*',(req,res)=>{
    res.send('Weather article not found')
})

app.get('*', (req, res)=>{
    res.send('404 Page not found')
})

app.listen(port,()=>{
    console.log('Started Successfully')
})