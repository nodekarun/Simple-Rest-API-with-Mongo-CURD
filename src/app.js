const express = require('express');
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const app =express()



//connect to mongodb
mongoose.connect('mongodb://localhost/emp')
mongoose.Promise = global.Promise


app.use(bodyParser.json())




app.use('/api',require('./routes/userRoute'))
 

module.exports = app;