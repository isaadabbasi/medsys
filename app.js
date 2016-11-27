var http = require('http');
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var io = require('socket.io');
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/medical');
var users = require('./routes/users');
var ascoltatori = require('ascoltatori');
var root_route = require('./routes/root_route');
var mosca = require('mosca');
var app = express();

if (app.get('env') !== 'production') {
  // expose node_modules to client app
  app.use(express.static(__dirname + "/node_modules"));
}

// uncomment after placing your favicon in /public
// app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'app')));

// ESTABLING MOSCA CONNECTION;; 
var ascoltatore = {
  //using ascoltatore
  type: 'mongo',
  url: 'mongodb://localhost:27017/mqtt',
  pubsubCollection: 'ascoltatori',
  mongo: {}
};

var mosca_settings = {
  port: 1883,
  backend: ascoltatore
};

var mosca_server = new mosca.Server(mosca_settings);

/**
 * ESTABLISHING DATABASE CONNECTION
 */
mongoose.connection
.on('error', console.error.bind(console, 'connection error:'))
.once('open', function() {
  // we're connected!
  console.log('DATABASE CONNECTION ESTABLISHED')
});

/*
* CONNECTING SERVER
*/
var port = process.env.PORT || '3000';
app.set('port', port);


var server = http.createServer(app);

var socketio = io(server);
var socketInstance = null;
app.use('/', root_route(express, mongoose, socketio));
app.use('/users', users(express, mongoose, socketio));

var connectedUsers = 0;
socketio.on('connection', function (socket) {
  console.log('SOCKET_IO CONNECTED USERS:', ++connectedUsers);
  socketInstance = socket;
  require('./socket/app_socket.js')(socket);
  require('./mqtt/app_mosca.js')(mosca_server, socket, socketio)
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers
// development error handler
// will print stacktrace
if (app.get('env') === 'development') {

  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.json({
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.json({
    message: err.message,
    error: {}
  });
});


module.exports = server;
