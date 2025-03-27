const reviewSchema=require('../model/review')
const mongoose = require("mongoose")

// this function add a book review to our database
const addReview = async (req, res) => {
    try {
        const newReview= new reviewSchema(req.body);
        console.log("New review", req.body);

        await newReview.save();
        res.status(200).json({ msg: 'you added new review', newReview});
    } catch (error) {
        console.log(error);
        res.send('You have a problem');
    }
}



// this function get a review from our database by id
const getReview=async(req,res)=>{
    try {
        const review=await reviewSchema.findById(req.params.id)
        if (review){
            res.status(200).json({message:'review gotten succesfully',book})
        }
    } catch (error) {
        res.status(404).json({message:"review not found"}) 
    }
}

//this function updates a book
const updateReview=async(req,res)=>{
    try {
        const reviewId=req.params.id
        const updatedReview=await reviewSchema.findByIdAndUpdate(reviewId,req.body)
        if (updatedReview){
            res.status(200).json({msg:'review updated ',updatedReview})}
    } catch (error) {
        console.error(error)
    }
}

//this function deleted a book
const deleteBook=async(req,res)=>{
    try {
        const bookId=req.params.id
        const deletedBook= await  bookSchema.findByIdAndDelete(bookId,req.body)
        if (deletedBook){
            res.status(200).json({msg:'deleted ',deletedBook})
        }
    } catch (error) {
        console.error(error)
    }
    
}

//this function deleted a book
const deleteReview=async(req,res)=>{
    try {
        const reviewId=req.params.id
        const deletedReview= await  reviewSchema.findByIdAndDelete(reviewId,req.body)
        if (deletedReview){
            res.status(200).json({msg:'deleted ',deletedReview})
        }
    } catch (error) {
        console.error(error)
    }
    
}

//get all reviews
const getAllReviews=async(req,res)=>{
     try {
        const reviews=await reviewSchema.find()
        res.status(200).json({ msg: 'You got all the reviews', reviews });
     } catch (error) {
        console.error("mission failed")
        res.status(404).send('An error occurred while fetching reviews');
     }
}
module.exports={addReview,getReview,updateReview,deleteReview,getAllReviews}