require('dotenv').config();
require('./config/database');

const Board = require('./models/board');

(async function() {

  await Board.deleteMany({});
  const boards = await Board.create([
    {name: 'Favorites', public: false},

  ]);

  console.log(boards)

  process.exit();

})();

user: {type: Schema.Types.ObjectId, ref: 'User'},
name: {type: String, required: true, default: 'Favorites'},
public: {type: Boolean, default: false},
items: [{type: Schema.Types.ObjectId, ref:'Item'}]