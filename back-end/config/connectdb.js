const mongoose=require('mongoose')
require("dotenv").config()
const connectDb=async()=>{
    try {
        await mongoose.connect(process.env.uri)
        console.log('connecting to your data base finalProject');

        
    } catch (error) {
        console.error(error)
    }
}
module.exports=connectDb