const express = require('express');
const http = require('http');
const path = require('path');
const jsonParser = require('body-parser').json;
const logger = require('morgan');
const mongoose = require('mongoose');
const productApi = require('./api/productApi');

/*
 * Database connection.
 */
mongoose.connect(process.env.MONGODB_URI);
const db = mongoose.connection;

// Log errors trying to connect to database.
db.on('error', err => {
  console.error(`Error while connecting to DB: ${err.message}`);
});

// Log successful connection to database.
db.once('open', () => {
  console.log('DB connected successfully!');
});

/*
 * Express Application.
 */
const app = express();

// Setup the logging methods,
app.use(logger('dev'));

// If the content is mime type JSON, parse it automatically.
app.use(jsonParser());

// Static files.
app.use(express.static(path.join(__dirname, '../dist')));

/*
 * API endpoints.
 */
app.use('/api/products', productApi);

// When using Angular with HTML5 routing, everything is index.html.
// 404 Page Not Found should be handled by application.
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});

// If something goes terribly wrong.
app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.json({
    error: {
      message: err.message
    }
  });
});

// Listen to a specific port.
const port = process.env.PORT || 3001;
app.set('port', port);

// Create a server and get ready to accept connections.
const server = http.createServer(app);
server.listen(port, () => console.log(`Web server listening on: ${port}`));
