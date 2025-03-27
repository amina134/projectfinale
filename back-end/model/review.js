const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
  book: {
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'book', 
    required: true
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,  
    ref: 'user',  
    required: true
  },
  rating: {
    type: Number, 
    required: true,
    min: 1,
    max: 5
  },
  reviewText: {
    type: String,  
    required: true
  },
  createdAt: {
    type: Date,  
    default: Date.now
  },
  likesNumber:{
     type:Number
  },
});


const Review = mongoose.model('review', reviewSchema);

module.exports = Review;
