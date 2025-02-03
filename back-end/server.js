require('dotenv').config()
const express=require('express')
const app=express() 
const cors=require('cors')//to allow me to access to my dataBase

const port=process.env.port //importing the port from .env
const connectDb =require('./config/connectdb')//importing the connect db
const book=require('./model/book')// importing the book model
const bookRoute=require('./routes/bookRoutes') //importing the book route
const userRoute=require('./routes/userRoutes') // importing the user route
const authorRoute=require('./routes/authorRoutes');// importing the author route
app.use(cors())
const path = require('path');
app.use('/images',express.static(path.join(__dirname,'public/booksImages')))

app.use(express.json()) // a middleware function in Express that parses incoming requests with JSON payloads
connectDb()//functioning the connectdb






// Route principale pour les utilisteurs
app.use('/user', userRoute);

// ROute principale pour les autheurs
app.use('/author',authorRoute);

//Route principlae pour les annonces 
app.use('/book',bookRoute)

app.listen(port,()=>{
    console.log(`server is running on ${port}`)
}) // to run the server




