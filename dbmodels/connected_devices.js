console.log('connected devices file loaded');
var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var DevicesSchema = new Schema({
    connectedDevices: []
});


var DevicesModel = mongoose.model('devices', DevicesSchema);

module.exports = DevicesModel;