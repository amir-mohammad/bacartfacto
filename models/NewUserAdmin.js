const mongoose = require('mongoose');


const NewUserAdmin = mongoose.Schema({
    name:String,
    mobile:String,
    password:String,
    access:{
        dashboard:Boolean,
        admin:Boolean,
        teacher:Boolean,
        departemant:Boolean,
        course:Boolean,
        student:Boolean,
        webSetting:Boolean,
        gallery:Boolean,
        offerCode:Boolean
    },
    active:Boolean
})

module.exports = mongoose.model('NewUserAdmin', NewUserAdmin);