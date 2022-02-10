const mongoose = require('mongoose');
const Schema = mongoose.Schema;
require('./item');

const boardSchema = new Schema({
  user: {type: Schema.Types.ObjectId, ref: 'User'},
  name: {type: String, required: true, default: 'Favorites'},
  public: {type: Boolean, default: false},
  items: [{type: Schema.Types.ObjectId, ref:'Item'}]
}, {
  timestamps: true
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
  const itemDb = await mongoose.model('Item').findOne({ objectID: itemDetail.objectID})
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
      objectID: itemDetail.objectID,
      title: itemDetail.title,
      artistDisplayName: itemDetail.artistDisplayName,
      artistDisplayBio: itemDetail.artistDisplayBio,
      objectName: itemDetail.objectName,
      objectDate: itemDetail.objectDate,
      primaryImage: itemDetail.primaryImage,
      primaryImageSmall: itemDetail.primaryImageSmall,
      medium: itemDetail.medium,
      dimensions: itemDetail.dimensions,
    })
    board.items.push( item )
  }  
  return board.save();
};

boardSchema.methods.findItemFromBoard = async function(objectID) {
  const board = this;
  const itemDb = await mongoose.model('Item').findOne({ objectID: objectID })
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

boardSchema.methods.getItemDetails = async function() {
  const board = this
  let details = []
  const items = await board.items
  for (let i = 0; i < items.length; i++) {
    let item = await mongoose.model('Item').find({_id: items[i]._id})
    console.log('item in for loop', item);
    details.push(item[0])
  }
  console.log('details post loop', details)
  return details
}


module.exports = mongoose.model('Board', boardSchema)