const express=require('express')
const bookRoute=express.Router()
const {addBook,getBook,updateBook,deleteBook,getAllBooks}=require('../controllers/bookControllers')
bookRoute.use(express.json())


// http://localhost:4000/book/addBook
bookRoute.post('/addBook',addBook)

// http://localhost:4000/book/getBook/:id
bookRoute.get('/getBook/:id',getBook)

// http://localhost:4000/book/updateBook/:id
bookRoute.put('/updateBook/:id',updateBook)

// http://localhost:4000/book/deleteBook/:id
bookRoute.delete('/deleteBook/:id',deleteBook)

// http://localhost:4000/book/getAllBooks
bookRoute.get('/getAllBooks',getAllBooks)


module.exports=bookRoute