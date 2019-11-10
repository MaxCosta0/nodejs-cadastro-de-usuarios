'use.strict';
const express = require('express');
const app = express();
const handlebars = require('express-handlebars');
const bodyParser = require('body-parser');
const routes = require('./routes/routes');

let port = 3000;

//Template Engine
app.engine('handlebars', handlebars({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

//Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

//Rotas
app.use(routes);

app.listen(port, function(err){
    if(!err){
        console.log(`Endereço do Servidor: http://localhost:${port}`)
    }
})