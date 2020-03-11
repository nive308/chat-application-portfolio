const express=require('express')
const cors=require("cors")

const app=express()
const router=require('./config/routes')
setupDB=require('./config/database')
const port=3015

app.use(cors())

setupDB()
app.use(express.json())

app.use('/',router)

app.listen(port,()=>{
    console.log('listening on port',port)
})