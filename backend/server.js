const dotenv = require("dotenv")
dotenv.config()
const express= require("express")
const app = express()
const connectDb = require("./db")
const cors = require("cors")
const userRoutes = require("./routes/user.routes")
connectDb()
const  PORT = process.env.PORT


app.use(express.json())
app.use(cors())
app.use("/users",userRoutes)
app.get('/',(req,res)=>{
    res.send('Hello from the backend!');
})


app.listen(PORT,()=>{
    console.log(`server runnign at ${PORT}`)
})