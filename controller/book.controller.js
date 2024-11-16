const Book = require('../models/book.modelsy')

const postBook = async(req,res)=>{
const data = req.body
const object = await Book.create(data)
res.json({"mesage":"Object created succcessfully",object})
}

const getBook = (req,res)=>{
    res.json("data send")
}

module.exports = {
    postBook,
    getBook
}