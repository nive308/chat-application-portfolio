const mongoose=require('mongoose')
const Schema=mongoose.Schema
const validator=require('validator')

const userSchema=new Schema({
    name:{
        type:String,
    },
    email:{
        type:String,
        required:true,
        validate:{
            validator:function(value){
                return validator.isEmail(value)
            },
            message:function(){
                return 'invalid email'
            }
        }
   },
    mobile:{
        type:String,
        minlength:10,
        maxlength:10
    },
    isAdmin:{
        type: String,
        default:false  
    }
})

const User=new mongoose.model('user',userSchema)
module.exports=User



