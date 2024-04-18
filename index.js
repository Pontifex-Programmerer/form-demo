const express = require('express');
const app = express();
const default_routes = require('./routes/default');
const path = require('path')
const bodyparser = require('body-parser');

const PORT=3000;

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyparser.urlencoded({extended:true}))
app.use(bodyparser.json());

app.use(default_routes);

app.listen(PORT, ()=>{
    console.info('App is now listening on port ', PORT);
});
