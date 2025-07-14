
const userModel = require("../models/user.models")


module.exports.createUser = ({fullName,email,password})=>{
    if(!fullName || !email || !password){
        throw new Error("all field are req")
    }

    const user = userModel.create({
        fullName,
        email,
        password
    })

    return user
}