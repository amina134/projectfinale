const mongoose = require('mongoose');

const authorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
   
  },
  photo: {
    type: String,
  },
  bio: {
    type: String,
  },
  books: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'book',
    }
  ],
});

module.exports = mongoose.model('Author', authorSchema);
