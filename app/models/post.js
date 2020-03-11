const mongoose=require('mongoose')
const Schema=mongoose.Schema

const postSchema=new Schema({
    userid:{
        type:Schema.Types.Object,
        ref:'user'
    },
    title:{
        type:String
    },
    createdAt:{
        type:Date,
        default:Number(new Date())
    },
    description:{
        type:String
    }
})

const Post=new mongoose.model('post',postSchema)
module.exports=Post