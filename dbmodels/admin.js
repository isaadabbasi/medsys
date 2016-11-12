var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var AdminSchema = new Schema({
    uid: String,
    username: String,
    password: String,
    is_admin: Boolean,
    hospital_name: String
});


var AdminModel = mongoose.model('admin_sch', AdminSchema);

module.exports = AdminModel;