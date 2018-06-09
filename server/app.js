

var express = require('express')
var morgan = require('morgan')
var config = require('./data.json')

var app = express()

app.use(morgan('dev'))

app.get('/', function(req,res){
    res.send('hello world')      
    })

app.get('/data', function (req,res){
    res.json(config)
})

module.exports = app;