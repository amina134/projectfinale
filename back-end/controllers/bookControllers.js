const bookSchema=require('../model/book')
const mongoose = require("mongoose")
// this function add a book to our database
const addBook = async (req, res) => {
    try {
        const newBook= new bookSchema(req.body);
        console.log("New book", req.body);

        await newBook.save();
        res.status(200).json({ msg: 'you added new book', newBook });
    } catch (error) {
        console.log(error);
        res.send('You have a problem');
    }
}


// this function get a book from our database by id
const getBook=async(req,res)=>{
    try {
        const book=await bookSchema.findById(req.params.id)
        if (book){
            res.status(200).json({message:'book gotten succesfully',book})
        }
    } catch (error) {
        res.status(404).json({message:"book not found"}) 
    }
}

//this function updates a book
const updateBook=async(req,res)=>{
    try {
        const bookId=req.params.id
        const updatedBook=await bookSchema.findByIdAndUpdate(bookId,req.body)
        if (updatedBook){
            res.status(200).json({msg:'book updated ',updatedBook})}
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

//get all books
const getAllBooks=async(req,res)=>{
     try {
        const books=await bookSchema.find()
        res.status(200).json({ msg: 'You got all the books', books });
     } catch (error) {
        console.error("mission failed")
        res.status(404).send('An error occurred while fetching books');
     }
}
module.exports={addBook,getBook,updateBook,deleteBook,getAllBooks}