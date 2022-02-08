const mongoose = require('mongoose');
const Schema = mongoose.Schema;
require('./item');

const boardSchema = new Schema({
  user: {type: Schema.Types.ObjectId, ref: 'User'},
  name: {type: String, required: true, default: 'Favorites'},
  public: {type: Boolean, default: false},
  items: [{type: Schema.Types.ObjectId, ref:'Item'}]
})


boardSchema.statics.getBoard = function(userId) {
  return this.findOneAndUpdate(
    // query object
    {user: userId, name: 'Favorites'},
    // update object
    {user: userId},
    // create the board if it doesn't exist
    {upsert: true, new: true}
  )
}

boardSchema.methods.addItemToBoard = async function(itemDetail) {
  console.log('item detail', itemDetail)
  const board = this;
  const boardItem = board.items.find(item => item.apiID.equals(itemDetail.objectID));
  if (boardItem) {
    alert('item already added to favorites');
  } else {
    let item = await mongoose.model('Item').findOne({ apiID: itemDetail.objectID});
    if (item) {
      board.items.push( item )
    } else {
      item = await mongoose.model('Item').create({
        apiID: itemDetail.objectID,
        title: itemDetail.title,
        artist: itemDetail.artistDisplayName,
        artistBio: itemDetail.artistDisplayBio,
        objectName: itemDetail.objectName,
        objectDate: itemDetail.objectDate,
        imagePrimary: itemDetail.primaryImage,
        imageSmall: itemDetail.primaryImageSmall,
        medium: itemDetail.medium,
        dimensions: itemDetail.dimensions,
      })
      board.items.push( item )
    }
  }
  return board.save();
};



module.exports = mongoose.model('Board', boardSchema)