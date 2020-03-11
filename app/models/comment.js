const mongoose=require('mongoose')
const Schema=mongoose.Schema

const commentSchema=new Schema({
    postid:{
        type:Schema.Types.ObjectId,
        ref:'post'
    },
    message:{
      type:String
    },
    createdAt:{
        type:Date,
        default:Number(new Date())
    }
})

const Comment=new mongoose.model('comments',commentSchema)

module.exports=Comment