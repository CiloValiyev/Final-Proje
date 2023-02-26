const express = require("express");
const router = express.Router();
const cors = require("cors");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const mongoose = require("mongoose");


router.use(cors());
router.use(bodyParser.json());
dotenv.config()
const { Schema } = mongoose;
const ProductSchema = new Schema({
    message:{
        type: String,
        require: true  
    },
    avatar: {
        type: String,
        require: true
    },
    name: {
        type: String,
        required: true
    },
    categories:{
        type:String,
        required:true
    }
}, { timestamps: true })

const Description = mongoose.model("/", ProductSchema);

// GET

router.get("/", (req, res) => {
    Description.find({}, (err, docs) => {
        if (!err) {
            res.send(docs)
        }
        else {
            res.status(500).json({ message: err })
        }
    })
})

//Get by id

router.get("//:id", (req, res) => {
    const { id } = req.params;
    Description.findById(id, (err, docs) => {
        if (!err) {
            if (docs) {
                res.send(docs)
            }
            else {
                res.status(404).json({ message: "404 Not Found" })
            }
        }
        else {
            res.status(500).json({ message: err })
        }
    })
})

// Post
router.post("/", (req, res) => {
    const description = new Description({
        message: req.body.message,
        avatar:req.body.avatar,
        name:req.body.name,
        categories: req.body.categories,
    })
    description.save()
    res.status({message:"SUCCESFULL"})
})

// Delete
router.delete("/:id", (req,res) => {
    const {id} = req.params;
    Description.findByIdAndDelete(id,(err)=>{
        if(!err){
            res.send("Delete")
        }
        else{
            res.status(500).json({message:err})
        }
    })
})
module.exports = router
