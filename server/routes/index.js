const express=require('express')
const bodyParser = require('body-parser');

const router=express.Router()
const path=require('path')

const apiroutes=require('./apiroutes')

const routes=app=>{
app.use(apiroutes)
}
module.exports=routes
