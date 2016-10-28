module.exports = function(express, mongoose, socketio){
  var router = express.Router();

  /* GET users listing. */
  socketio.on('connection', function(socket){
    console.log('SOCKET -> '+ socket.length +'USER CONNECTED');
    socket.on('disconnect', function(){
      console.log('user disconnected');
    });
});
  router.get('/', function(req, res, next) {
    res.json({
      name: "John",
      last: "Smith"
    });
  });
  
  
  
  return router;
}
