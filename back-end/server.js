require('dotenv').config()
const express=require('express')
const app=express() 
const cors=require('cors')//to allow me to access to my dataBase

const port=process.env.port //importing the port from .env
const connectDb =require('./config/connectdb')//importing the connect db
const book=require('./model/book')// importing the book model
const bookRoute=require('./routes/bookRoutes') //importing the book route
const userRoute=require('./routes/userRoutes') // importing the user route
app.use(cors())
const path = require('path');
const reviewRoute = require('./routes/reviewRoutes')// importing the review route
app.use('/images',express.static(path.join(__dirname,'public/booksImages')))

app.use(express.json()) // a middleware function in Express that parses incoming requests with JSON payloads
connectDb()//functioning the connectdb






//principal route for the users
app.use('/user', userRoute);

//principal route for the books
app.use('/book',bookRoute)

//principal route for the reviews
app.use('/review',reviewRoute)



console.log("Before starting server");
app.listen(port,()=>{
    console.log(`server is running on ${port}`)
}) // to run the server
console.log("after starting server");