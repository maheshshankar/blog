/**
 * Created by vemulma on 1/31/2017.
 */

const mongoose = require('mongoose');
const bcrypt = require("bcrypt-nodejs");

const Schema = mongoose.Schema;

const articleSchema = new Schema({
   title : String,
   description : String,
   tags : Array,
   likes: Number,
   url: String,
   comments: Array,
   date : Date

});




module.exports = mongoose.model('articles',articleSchema);
