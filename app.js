const express = require('express');
const cors = require('cors');

// Route handlers
const kpiApi = require('./app/routes/kpisRouter');

// Create server
const app = express();

var corsOptions = {
    origin: "http://localhost:8080"
  };
  
  app.use(cors(corsOptions));
  
  // parse requests of content-type - application/json
  app.use(express.json());
  
  // parse requests of content-type - application/x-www-form-urlencoded
  app.use(express.urlencoded({ extended: true }));

// API routes
app.use('/api', kpiApi);

module.exports = app;
