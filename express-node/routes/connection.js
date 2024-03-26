const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();
const url ="mongodb://localhost:27017/studentsDB";
     mongoose.connect(url);
     mongoose.connection.on('connected',function(){
     console.log('Mongoose connected to '+url);
    })
const studentsSchema = new mongoose.Schema({
    studentId: {
        type: String,
        required: [true,'StudentId is manadatory']
    },
    studentName:{
        type:String,
        reqired:[false,'Student Name is not required ']
    },
    studentMarks: {
        type:String,
        reqired:[false,'Student Marks is not required ']
    }
})
//const userSchema 
const Students = mongoose.model('students',studentsSchema);
router.get('/',async(req,res) => {
    res.send("sample testing call");
})
router.get('/getStudents',async(req,res) => {
    
    console.log("in mongo connection");
    const students = await Students.find();
    res.json(students);
})

module.exports = router;