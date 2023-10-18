process.env.NODE_ENV = process.env.NODE_ENV || 'development';
var express = require('./config/express');
let mongoose = require('mongoose')
var app = express();

const store = new mongoStore({
    uri:"mongodb://127.0.0.1:27017/MarketPlace",
    collection:"sessions"
})

app.use(session({
    secret:'I am the secret key',
    resave:true,
    saveUninitialized:true,
    store:store
}))
mongoose.connect('mongodb://127.0.0.1:27017/MarketPlace');
app.listen(process.env.PORT || 3000);
module.exports = app;

console.log('Server running at http://localhost:3000/');
