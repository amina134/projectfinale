const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    trim: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
    unique: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 6,
  },
  role: {
    type: String,
    enum: ['admin', 'user', 'author'],
    default: 'user', 
  },
  books: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'book',  
    }
  ]
});

const User = mongoose.model('User', userSchema);

module.exports = User;
