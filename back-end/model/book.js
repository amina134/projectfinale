const mongoose = require('mongoose');

const bookSchema =  mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user', 
  },
  genre: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  price: {
    type: Number,
    required: true,
  },

  availableForThrift: {
    type: Boolean,
    default: false,
  }
,
  language:{
    type:String,
  },
  bookImage:{
    type:String,
  },
  mood:{
    type:String
  },
  purchases: { type: Number, default: 0 }, // Track popularity
});


module.exports=mongoose.model('book', bookSchema); ;
