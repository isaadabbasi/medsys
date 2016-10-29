var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var PatientSchema = new Schema({
    uid: String,
    name: String,
    disease: String, 
    Status: Boolean,
    is_admin: Boolean,
    condition: String,
    admit: Boolean,
    admit_date: Date,
    discharge_date: Date
});


var PatientModel = mongoose.model('patient_sch', PatientSchema);

module.exports = PatientModel;