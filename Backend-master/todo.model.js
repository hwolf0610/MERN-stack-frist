const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let reactUser = new Schema({
    email: {
        type: String
    },
    password: {
        type: String
    } 
});
module.exports = mongoose.model('reactUser', reactUser);