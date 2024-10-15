//creating express server

require('dotenv').config();
const express = require('express');
const expressLayout = require('express-ejs-layouts');
//this create express app
const  app = express();
//nedd port
const port = 5000 || process.env.PORT;


app.use(express.static('public'));
//Templating Engine
app.use(expressLayout);
app.set('layout','./layouts/main');
app.set('view engine','ejs');
//get route & go into browser
app.use('/', require('./server/routes/main'));

app.listen(port , ()=>{

    console.log(`App listening on port ${port}`);
});