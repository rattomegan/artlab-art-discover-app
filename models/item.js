const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const itemSchema = new Schema({
  apiID: {type: Number, required: true},
  title: String,
  artist: String,
  artistBio: String,
  objectName: String,
  objectDate: String,
  imagePrimary: String,
  imageSmall: String,
  medium: String,
  dimensions: String,
})


module.exports = mongoose.model('Item', itemSchema)