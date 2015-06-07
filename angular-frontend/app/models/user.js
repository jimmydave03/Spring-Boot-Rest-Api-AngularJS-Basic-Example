/**
 * Created by jimmyd on 1/6/15.
 */

// get an instance of mongoose and mongoose.Schema
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
// set up a mongoose model
module.exports = mongoose.model('User', new Schema({
    name: String,
    password: String,
    admin: Boolean
}));