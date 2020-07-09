const mongoose = require('mongoose');
const passwordHash = require('password-hash');
const Schema = mongoose.Schema;

const User = new Schema({
    name: String,
    password: String,
    email:String,
});

User.methods.toJSON = function() {
    let obj = this.toObject();
    delete obj.password;
    delete obj.__v;
    delete obj._id;
    return obj;
};

User.methods.generateHash = (password) => {
    return passwordHash.generate(password);
};

User.methods.verifyPassword = (password) => {
    return passwordHash.verify(password, this.password);
};

module.exports = mongoose.model('User', User);