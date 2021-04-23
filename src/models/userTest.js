const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userTestSchema = new Schema({
    name: {
        type: String,
        required:true,
        trim: true              
    },
    lastName: {
        type: String,
        trim: true
    },
    email: {
        type: String,
        trim: true,
        unique: [true, "O email já está sendo usado"],
        lowercase: true

    },
    password: {
        type: String,
        required: true
    },
    admin: {
        type: Boolean,
        default: true
    }
})


  
const UserTest = mongoose.model('UserTest',userTestSchema)
module.exports = UserTest