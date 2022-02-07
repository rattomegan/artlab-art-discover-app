const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const itemSchema = new Schema({
  objectID: {type: Number, required: true},
  title: String,
  artist: String,
  imagePrimary: String,
  imageSmall: String
})


module.exports = mongoose.model('Item', itemSchema)