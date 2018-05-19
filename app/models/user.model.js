const mongoose = require('mongoose');
 
const UserSchema = mongoose.Schema({
    firstname: {type:String,required:true},
    lastname: {type:String,required:true},
    username: {type:String,required:true,unique:true},
    password: {type:String,required:true},
    _id:String,
});
 
module.exports = mongoose.model('User', UserSchema);