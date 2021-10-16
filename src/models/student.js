const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const studentSchema = new Schema({
    name: String,
    address: String,
    cellphone: String,
    picture:String
});

module.exports = mongoose.model('students', studentSchema);
