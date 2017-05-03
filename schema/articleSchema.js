/**
 * Created by vemulma on 1/31/2017.
 */

const mongoose = require('mongoose');
const bcrypt = require("bcrypt-nodejs");

const Schema = mongoose.Schema;

const articleSchema = new Schema({
   title : String,
   description : String,
   tags : String,
   likes: Number
});




module.exports = mongoose.model('articles',articleSchema);
