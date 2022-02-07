const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const boardSchema = new Schema({
  user: {type: Schema.Types.ObjectId, ref: 'User'},
  name: {type: String, required: true, default: 'Favorites'},
  public: {type: Boolean, default: false},
  items: [{type: Schema.Types.ObjectId, ref:'Item'}]
})


module.exports = mongoose.model('Board', boardSchema)