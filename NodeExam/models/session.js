const mongoose= require('mongoose')
const Schema= mongoose.Schema

const Session= new Schema({
    User_id:String,
    created_at:String,
})

module.exports= mongoose.model("Session",Session)
