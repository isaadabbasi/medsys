var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var PatientSchema = new Schema({
    doc_id: String,
    name: String,
    disease: String, 
    status: Boolean,
    is_admin: Boolean,
    condition: String,
    admit_date: Date,
    discharge_date: Date
});


var PatientModel = mongoose.model('patient_sch', PatientSchema);

module.exports = PatientModel;