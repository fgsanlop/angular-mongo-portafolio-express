'use strict'

var mongoose = require('mongoose');
var app = require('./app');
var port = 3700;

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost:27017/portafolio')
        .then(()=>{
            console.log("Conectado MDB");
            //server creation
            app.listen(port,()=>{
                console.log("Servidor corriendo");
            });
        })
        .catch(err=>{
            console.log("***Error: "+err);
        });


