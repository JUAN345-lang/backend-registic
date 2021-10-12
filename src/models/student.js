const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const studentSchema = new Schema({
    name: String,
    address: String,
    phone: String,
    grade: String,
});

module.exports = mongoose.model('students', studentSchema);
