const express = require('express');
const app = express();
const routes = require('../Routes');

app.use(express.json());
app.use(express.urlencoded({extended: true}));


// Models
require('./models/ListModels')();

// Rotas
app.use(routes);
app.use((req,res,next) => {
    res.status(404).json({"message":"Endpoint não encontrado."})
})



module.exports = app;
