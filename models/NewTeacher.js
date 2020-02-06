const mongoose = require('mongoose');

const NewTeacherSchema = mongoose.Schema({
    name:String,
    mobile:String,
    nationCode:String,
    bio:String,
    pic:String
});

module.exports = mongoose.model('NewTeacher',NewTeacherSchema);