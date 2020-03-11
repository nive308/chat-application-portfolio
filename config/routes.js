const express=require('express')
const router=express.Router()

const userController=require('../app/controllers/userController')
const postController=require('../app/controllers/postController')
const commentController=require('../app/controllers/commentController')

// const userController = require('../app/controllers/userController')
// const authenticateUser = require("../app/middlewares/authentication")


router.get('/users',userController.list)
router.post('/users',userController.create)
router.get('/users/:id',userController.show)
router.delete('/users/:id',userController.delete)
router.put('/users/:id',userController.update)

router.get('/posts',postController.list)
router.post('/posts',postController.create)
router.get('/posts/:id',postController.show)
router.delete('/posts/:id',postController.delete)
router.put('/posts/:id',postController.update)

router.get('/comments',commentController.list)
router.post('/comments',commentController.create)
router.get('/comments/:id',commentController.show)
router.delete('/comments/:id',commentController.delete)
router.put('/comments/:id',commentController.update)



// router.post('/users/register', userController.register)
// router.post('/users/login', userController.login)
// router.get('/users/account', authenticateUser, userController.account)
// router.delete('/users/logout', authenticateUser, userController.logout)

module.exports=router