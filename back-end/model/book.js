const mongoose = require('mongoose');

const bookSchema =  mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  // author: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: 'author', 
  // },
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
  }
});


module.exports=mongoose.model('book', bookSchema); ;
