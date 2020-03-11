const Comment=require('../models/comment')

module.exports.list=(req,res)=>{
    Comment.find()
    .then(Comment=>{
        res.json(Comment)
    })
    .catch(err=>{
        res.json(err)
    })
}

module.exports.create=(req,res)=>{
    const body=req.body
    const comment=new Comment(body)
    comment.save()
    .then(comment=>{
        res.json(comment)
    })
    .catch(err=>{
        res.json(err)
    })
}

module.exports.show=(req,res)=>{
    const id=req.params.id
    Comment.findById(id)
    .then(comment=>{
        if(comment){
        res.json(comment)
        }else{
            res.json({})
        }
    })
    .catch(err=>{
        res.json(err)
    })
}
module.exports.delete=(req,res)=>{
    const id=req.params.id
    Comment.findByIdAndDelete(id)
    .then(comment=>{
     if(comment){
         res.json(comment)
     }else{
         res.json({})
     }
    })
    .catch(err=>{
        res.json(err)
    })
}

module.exports.update=(req,res)=>{
    const body=req.body
    const id=req.params.id
    Comment.findByIdAndUpdate(id,body,{new:true,runValidators:true})
    .then(comment=>{
        if(comment){
            res.json(comment)
        }else{
            res.json({})
        }
    })
    .catch(err=>{
        res.json(err)
    })
}