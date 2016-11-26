var connectedUsers = 0;
var doctor = require('../dbmodels/doctor.js');
var patient = require('../dbmodels/patient.js');

module.exports = function (socketio) {


  socketio.on('connection', function (socket) {
    ++connectedUsers;
    console.log('SOCKET -> ' + connectedUsers + ' USER CONNECTED');
    socket.emit('message', "user connected");

    socket.on('message', function (message) {
      if (message && typeof message == 'string') {
        console.log('200 ' + message);
        socketio.emit('message', message)
      }
    })

    socket.on('login', function (credentials) {
      console.log('email recieved -> ', credentials);
      var _doc = {};
      var someId = 101;

      try {
        doctor.findOne({ email: credentials.email, password: credentials.pass },
          { pass: 0, __v: 0, is_admin: 0, uid: 0 }, function (err, match) {
            if (err) throw err;

            if (!err && match) {
              console.log('match found: ', JSON.stringify(match));
              socket.emit('account_validated', JSON.stringify(match));
            }

            if (!err && !match) {
              socket.emit('account_validated', "No Such User Exists!");
            }
          })

      } catch (e) {
        console.log('No account match found', e);
      }

      console.log('EMAIL =', credentials['email']);
      console.log('PASSWORD =', credentials.pass);
    })

    socket.on('get_all_patients', (createdById) => {
      try {
        patient.find({ doc_id: createdById, admit: true },
          { __v: 0, discharge_date: 0 }, (err, results) => {
            if (err)
              throw err;
            else if (!err)
              socket.emit('get_all_patients', results || []);
          })
      } catch (ex) { console.log(ex) }
    })

    socket.on("add_new_patient", (newPatient) => {

      console.log('new patient: ', newPatient);

      var newPatient = new patient({
        doc_id: newPatient.uid,
        name: newPatient.name,
        disease: newPatient.disease,
        admit: newPatient.admit,
        is_admin: false,
        condition: newPatient.condition,
        admit_date: newPatient.admit_date,
        discharge_date: newPatient.discharge_date || ''
      })
      try {
        newPatient.save((err) => {
            if (err) throw err;
          if (!err)
            socket.emit('add_new_patient', "Patient Successfully Added");
        })
      } catch (ex) {
        console.log("CAUGHT EXCEPTION: ", ex);
        socket.emit('add_new_patient', "Error! Unable to save Patient");
      }
    })

    socket.on('get_patient_data', function(data){
      setInterval(function(){
        socket.emit()
      })
    })
    socket.on('discharge_patient', (data)=>{
      if(data.patient_id && data.doc_id)
        patient.findOne({_id: data.patient_id}, function(err, pt){
          if(err) console.log(err);

          if(!err && pt){
            pt.discharge_date = new Date().getTime();
            pt.admit = false;
            console.log(new Date().getTime(), pt);
            patient.update({_id: data.patient_id}, pt, function(err, update){
              if(err) console.log('error at updating record');
              if(!err && update)
                console.log('updated successfully');
            })
          }
        })
    })

    socket.on('disconnect', function () {
      --connectedUsers;
      console.log('user disconnected __ connected users: ' + connectedUsers);
    });


  });
}