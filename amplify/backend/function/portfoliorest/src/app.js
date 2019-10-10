const express = require('express');
const bodyParser = require('body-parser');
const awsServerlessExpressMiddleware = require('aws-serverless-express/middleware');
const uuidv4 = require('uuid/v4');
const moment = require('moment');

//configure service
const AWS = require('aws-sdk');

// declare a new express app
const app = express()
app.use(bodyParser.json())
app.use(awsServerlessExpressMiddleware.eventContext())

// Enable CORS for all methods
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
  next()
});

app.post('/contact', function(req, res) {

  //initiate service
  const dynamo = new AWS.DynamoDB.DocumentClient();

  const date = moment().format('MMMM Do YYYY, h:mm:ss a');

  const params = {
    TableName: "contact_developer",
    Item: {
      id: uuidv4(),
      date: date,
      name: req.body.name,
      email: req.body.email,
      message: req.body.message
    }
  };

  //service interaction
  dynamo.put(params, (err, data)=>{
    if(err){

        res.json({
          error: err.message
        });

    }else{
      res.json({
        success: 'contact success', 
        url: req.url, 
        body: req.body
      });
    }

  });
  
});

app.get('/projects', (req, res)=>{

  const dynamo = new AWS.DynamoDB.DocumentClient();

  const params = {
    TableName: 'projects_developer'
  };

  //service interaction
  dynamo.scan(params, (err, data)=>{
    if(err){

      res.json({
        error: err.message
      });

    }else{
      res.json({
        success: 'projects found', 
        projects: data
      });
    }

  });

});

app.listen(3000, function() {
    console.log("App started")
});

// Export the app object. When executing the application local this does nothing. However,
// to port it to AWS Lambda we will create a wrapper around that will load the app from
// this file
module.exports = app
