var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var DoctorSchema = new Schema({
    name: String,
    email: String,
    password: String,
    is_admin: Boolean,
    specialization: [],
    join_date: Date
});

var DoctorModel;

module.exports = DoctorModel = mongoose.model('doc_sch', DoctorSchema);
