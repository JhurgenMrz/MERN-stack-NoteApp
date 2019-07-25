const express = require("express");
const app = express();
const cors = require('cors');
const path = require('path')

//settings
app.set('port', process.env.PORT || 4000)

//middlewares --> Son funciones que se ejecutan antes de las URLs
app.use(cors());
app.use(express.json())

//static files
app.use(express.static(path.join(__dirname,'build')))

app.get('/', function(req, res){
    res.sendFile(path.join(__dirname,'build','index.html'))
})

//routes
app.use('/api/users', require('./routes/users'));
app.use('/api/notes', require('./routes/notes'));

module.exports = app;