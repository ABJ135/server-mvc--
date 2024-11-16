const Book = require('../models/book.models')

const postBook = async(req,res)=>{
const data = req.body
const object = await Book.create(data)
res.json({"mesage":"Object created succcessfully",object})
}

const getBook = async (req,res)=>{
    const object  = await Book.find({})
    res.json(object)
}

module.exports = {
    postBook,
    getBook
}