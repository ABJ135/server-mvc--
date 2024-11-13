const postBook = (req,res)=>{
const data = req.body
res.json(data)
}

const getBook = (req,res)=>{
    res.json("data send")
}

module.exports = {
    postBook,
    getBook
}