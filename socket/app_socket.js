var connectedUsers = 0;
module.exports = function(socketio){
    
    
    socketio.on('connection', function(socket){
    ++connectedUsers;
    console.log('SOCKET -> '+ connectedUsers +' USER CONNECTED');
    
    socket.on('message', function(message){
      if( message && typeof message == 'string' ){
        console.log('200 '+message);
        socketio.emit('message', message)
      }
    })
    
    socket.on('disconnect', function(){
      --connectedUsers;
      console.log('user disconnected __ connected users: '+connectedUsers);
    });


});
}