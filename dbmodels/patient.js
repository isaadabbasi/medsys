var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var PatientSchema = new Schema({
    doc_id: String,
    name: String,
    disease: String, 
    admit: Boolean,
    is_admin: Boolean,
    condition: String,
    admit_date: Number,
    discharge_date: String
});


var PatientModel = mongoose.model('patient_sch', PatientSchema);

module.exports = PatientModel;