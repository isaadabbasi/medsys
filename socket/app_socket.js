module.exports = function(socketio){
    socketio.on('connection', function(socket){
    console.log('SOCKET -> '+ socket.length +' USER CONNECTED');
    socket.on('disconnect', function(){
      console.log('user disconnected');
    });
});
}