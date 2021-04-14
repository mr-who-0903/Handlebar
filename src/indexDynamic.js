const { static } = require('express');
const express = require('express');
const { stat } = require('fs');
const app = express();
const port = 3000;
const path = require('path');

// THIS TEMPLATE ENGINES IS USED FOR DYNAMIC WEB PAGES

// next 2 lines are used to set path
const staticPath = path.join(__dirname,"../views");
app.set('views',staticPath);

// to set view engine
app.set("view engine", "hbs");

// template engine route
app.get('/', (req, res) =>{
    res.render('index', {
        userName : "Ritik"
    });
})

app.get('/', (req, res) =>{
    res.send('This is home page !');
});

app.listen(port, () =>{
    console.log(`listening to port ${port}`);
});