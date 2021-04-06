const mongoose = require('mongoose')
const Schema = mongoose.Schema

const linkSchema = new Schema({
    name: {
        type: String,
        require: true,
        trim: true              
    },
    url: {
        type: String,
        trim: true,
        require: true
    },
    active: {
        type: Boolean,
        default: true
    },
    createdAt : {
      type: Date,
      default: Date.now()
    }
})

/*
    {
    "nome" : "game",
    "ano" : "2020",
    "subsistema": "xxxxxxxx",
    "Linkedin" : "http://xxxx..xxx.x",
    "img" : "rota"
    }
    
*/

const Link = mongoose.model('Link',linkSchema)
module.exports = Link