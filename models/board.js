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
  const board = this;
  // look for item in DB
  const itemDb = await mongoose.model('Item').findOne({ apiID: itemDetail.objectID})
  if (itemDb) {
    // if item exists, look for it in the board
    const boardItem = await board.items.find(item => item.equals(itemDb._id));
    if (boardItem) {
      console.log('boarditem in model', boardItem)
      // if item exists in the board:
      console.log('item already added to favorites');
    } else {
      // let item = await mongoose.model('Item').findOne({ apiID: itemDetail.objectID});
      board.items.push( itemDb )
    } 
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
  return board.save();
};

boardSchema.methods.findItemFromBoard = async function(objectID) {
  const board = this;
  const itemDb = await mongoose.model('Item').findOne({ apiID: objectID })
  if (itemDb) {
    const boardItem = await board.items.find(item => item.equals(itemDb._id));
    if (boardItem) {
      // console.log('itemDb', itemDb)
      return itemDb
    }
  } else {
    return false
  }
}


module.exports = mongoose.model('Board', boardSchema)