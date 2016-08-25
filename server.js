/*eslint no-console:0 */
'use strict';
require('core-js/fn/object/assign');
const express = require('express');
const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const config = require('./webpack.config');
const open = require('open');

// App
const app = express();
app.get('/', function (req, res) {
  res.send('Hello world\n');
});

// Constants
const PORT = 8080;

new WebpackDevServer(webpack(config), config.devServer)
.listen(PORT, 'localhost', (err) => {
  if (err) {
    console.log(err);
  }
  console.log('Running "Knight Noir Book" on http://localhost:' + PORT);
  // console.log('Listening at localhost:' + config.port);
  console.log('Opening your system browser...');
  open('http://localhost:' + config.port + '/webpack-dev-server/');
});
