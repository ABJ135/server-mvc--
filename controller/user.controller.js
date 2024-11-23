const user = require('../models/user.models')

const addUser = async(req,res)=>{
    const data = req.body
    const object = await user.create(data)
    res.json({"message":"Object created Successfully",object})
}

const getUser = async(req,res)=>{
const object = await user.find({})
res.json(object)
}

const userById = async(req,res)=>{
    
}