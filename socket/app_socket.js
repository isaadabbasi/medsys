var connectedUsers = 0;
var doctor = require('../dbmodels/doctor.js');

module.exports = function(socketio){
    
    
    socketio.on('connection', function(socket){
    ++connectedUsers;
    console.log('SOCKET -> '+ connectedUsers +' USER CONNECTED');
    socket.emit('message', "user connected");
    
    socket.on('message', function(message){
      if( message && typeof message == 'string' ){
        console.log('200 '+message);
        socketio.emit('message', message)
      }
    })
    
    socket.on('login', function(credentials){
        console.log('email recieved -> ', credentials);
          var _doc = {};
          var someId = 101;
          
          try{
          doctor.findOne({email:credentials.email, password: credentials.pass}, 
          {pass: 0, __v: 0, is_admin: 0, uid: 0}, function(err, match){
            if(err) throw err;

            if(!err && match){
              console.log('match found: ', JSON.stringify(match));
              socket.emit('account_validated', JSON.stringify(match));
            }

            if(!err && !match){
              socket.emit('account_validated', "No Such User Exists!");
            }
            })

          }catch(e){
            console.log('No account match found', e);
          }
          
          
          // var newDoctor = new doctor({
          //   uid: someId,
          //   name: 'Sushan Kumar',
          //   email: credentials.email,
          //   password: credentials.pass,
          //   is_admin: false,
          //   specialization: [],
          //   patients: []
          // })
          // someId++;
          // console.log('new doctor: ', newDoctor);



          // try{
          //   newDoctor.save(function(err){
          //     if(err) throw err;
          //     console.log('NEW DOCTOR HAS BEEN ADDED');
          //   })

          // } catch(err) {
          //   if(err) console.log('unable to save');
          // }
          
        console.log('EMAIL =', credentials['email']);
        console.log('PASSWORD =', credentials.pass);
    })    

    socket.on('disconnect', function(){
      --connectedUsers;
      console.log('user disconnected __ connected users: '+connectedUsers);
    });


});
}