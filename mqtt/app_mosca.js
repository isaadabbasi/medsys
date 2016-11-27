var connectedDevices = require('./../dbmodels/connected_devices.js');
module.exports = function(mosca, socket, socketIO){
connectedDevicesList = [];

var mosca_message = {
        topic: 'patient',
        payload: 'asdfghjk', // or a Buffer
        qos: 0, // 0, 1, or 2
        retain: false // or true
        };

socket.on('get_devices', function(){ 
    // socket.emit('get_devices', connectedDevices);
    console.log('get devices call made');
    getConnectedDevices();
}); 

function getConnectedDevices(){
    connectedDevices.findOne({}, function(err, devices){
        if(err) console.log(err);
        if(!err){
            console.log("CONNECTED DEVICES: ", devices.connectedDevices);
            socket.emit('get_devices', devices.connectedDevices)

        }
    })
}

// var devices = connectedDevices({
//     connectedDevices:[]
// }).save(function(err) {
//     if(err) console.log(err);
//     console.log('DEVICES INIT')    
// })


socket.on('set_patient_device', function(ids){
    if(ids.p_id && ids.device_id){
        var mosca_message = {
            topic: ids.device_id,
            payload: ids.p_id, // or a Buffer
            qos: 0, // 0, 1, or 2
            retain: false // or true
        };

    mosca.publish(mosca_message ,function(asd){console.log('SET PATIENT DEVICE CB')});
    }
})


socket.on('device_state', function(status){
    console.log('DEVICE STATE EMIITED: ', status, typeof status);
    mosca_message.topic = 'onoff';
    mosca_message.payload = status;
    mosca.publish(mosca_message ,function(asd){console.log('SET PATIENT DEVICE CB')});
});


mosca.on('clientConnected', function(client) {
    console.log('client connected', client.id);
    let localConnectedDevices = [];
    connectedDevicesList.push(client.id);
    localConnectedDevices.push(client.id);
    console.log('connected devices list :',connectedDevicesList);
    connectedDevices.update({},{$addToSet:{connectedDevices:client.id}}, function(err){
        // connectedDevices.update({}, {connectedDevices: [localConnectedDevices]}, function(){
        if(err) console.log('ERROR ON UPDATING RECORD');
        if(!err) console.log ('NEW DEVICE ADDED TO DATABBASE');
        getConnectedDevices();      
    });
        var booleanValue = true;
        // setInterval(()=> {
        //     mosca_message.payload = `${booleanValue = !booleanValue}`;
        //     mosca_message.topic = "onoff";
        //     mosca.publish(mosca_message, cb)
        // }, 3000 );

        // function cb() { }
});


// fired when a message is received
mosca.on('published', function(packet, client) {
    if(packet.topic == "sensor_data")
        socket.emit('sensor_data', packet.payload.toString());
});

mosca.on('ready', setup);

mosca.on('clientDisconnected', function(client) {
    console.log('Client Disconnected:', client.id);
    connectedDevices.update({}, {$pull: {connectedDevices: client.id}}, function(err){
        if(err) console.log('ERROR AT UPDAING WHEN REMOVING DEVICE', err);
        if(!err){
            console.log('[MONGODB] DEVICE REMOVED SUCCESSFULLY');
            getConnectedDevices();
        }

    });    
});

// fired when the mqtt server is ready
function setup() {
  console.log('Mosca server is up and running');
}
}