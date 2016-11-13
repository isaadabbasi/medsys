var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var DoctorSchema = new Schema({
    uid: String,
    name: String,
    email: String,
    password: String,
    is_admin: Boolean,
    specialization: [],
    patients: []
});

var DoctorModel;

module.exports = DoctorModel = mongoose.model('doc_sch', DoctorSchema);
