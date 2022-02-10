const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const itemSchema = new Schema({
  objectID: {type: Number, required: true},
  title: String,
  artistDisplayName: String,
  artistDisplayBio: String,
  objectName: String,
  objectDate: String,
  primaryImage: String,
  primaryImageSmall: String,
  medium: String,
  dimensions: String,
}, {
  timestamps: true
})


module.exports = mongoose.model('Item', itemSchema)