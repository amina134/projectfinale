const express = require('express');
const authorRoute = express.Router();
const { getAllAuthors, addAuthor, getAuthorById, updateAuthor, deleteAuthor } = require('../controllers/authorControllers');



authorRoute.use(express.json());

//http://localhost:4000/author/allAuthors
authorRoute.get('/allAuthor', getAllAuthors);
//http://localhost:4000/author/addAuthor
authorRoute.post('/addAuthor',  addAuthor);
//http://localhost:4000/author/getAuthorById/:id
authorRoute.get('/getAuthorById/:id', getAuthorById);
//http://localhost:4000/author/updateAuthor/:id
authorRoute.put('/updateAuthor/:id', updateAuthor);
//http://localhost:4000/author/deleteAuthor/:id
authorRoute.delete('/deleteAuthor/:id', deleteAuthor);


module.exports = authorRoute;