const express=require('express')
const reviewRoute=express.Router()
const {addReview,getReview,updateReview,deleteReview,getAllReviews}=require('../controllers/reviewControllers')
reviewRoute.use(express.json())


// http://localhost:4000/review/addReview
reviewRoute.post('/addReview',addReview)

// http://localhost:4000/review/getReview/:id
reviewRoute.get('/getReview/:id',getReview)

// http://localhost:4000/review/updateReview/:id
reviewRoute.put('/updateReview/:id',updateReview)

// http://localhost:4000/review/deleteReview/:id
reviewRoute.delete('/deleteReview/:id',deleteReview)

// http://localhost:4000/review/getAllReviews
reviewRoute.get('/getAllReviews',getAllReviews)


module.exports=reviewRoute