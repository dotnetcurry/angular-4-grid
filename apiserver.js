var body_Parser = require('body-parser');  
var path = require('path');  
var express = require('express');  
var http = require('http');  

var app = express();  

var cors = require('cors');
app.use(cors());

app.use(body_Parser.urlencoded({ extended: false }));
app.use(body_Parser.json());


var MongoClient = require('mongodb').MongoClient;
var rwOperation = require('./dal.js'); //Load the File

var communicationPort = 8020; 


//The REST API

app.get('/EmployeeList/api/employees', rwOperation.get);

app.post('/EmployeeList/api/employees', rwOperation.add);
app.put('/EmployeeList/api/employees/:Id', rwOperation.update);
app.delete('/EmployeeList/api/employees/:Id', rwOperation.delete);



app.listen(communicationPort);
console.log('Service Started');