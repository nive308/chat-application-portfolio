const Post=require('../models/post')

module.exports.list=(req,res)=>{
    Post.find()
    .then(post=>{
        res.json(post)
    })
    .catch(err=>{
        res.json(err)
    })
}

module.exports.create=(req,res)=>{
    const body=req.body
    const post=new Post(body)
    post.save()
    .then(post=>{
        res.json(post)
    })
    .catch(err=>{
        res.json(err)
    })
}

module.exports.show=(req,res)=>{
    const id=req.params.id
    Post.findById(id)
    .then(post=>{
        if(post){
            res.json(post)
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
    Post.findByIdAndDelete(id)
    .then(post=>{
        if(post){
            res.json(post)
        }else{
            res.json()
        }
    })
    .catch(err=>{
        res.json(err)
    })
}

module.exports.update=(req,res)=>{
    const id=req.params.id
    const body=req.body
    Post.findByIdAndUpdate(id,body,{new:true,runValidators:true})
    .then(post=>{
        if(post){
            res.json(post)
        }else{
            res.json({})
        }
    })
    .catch(err=>{
        res.json(err)
    })
}