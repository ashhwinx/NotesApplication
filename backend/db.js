const mongoose = require("mongoose")

const connectDB  =async ()=>{
    await mongoose.connect(process.env.DB_CONNECT).then(()=>{
            console.log("database conect susecfuly")
    })
}

module.exports = connectDB