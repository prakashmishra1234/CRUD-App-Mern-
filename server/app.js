//imports
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
//const bodyparser = require('body-parser');
const student = require('./models/students');
const app = express();

//db connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/students');
mongoose.connection.on('connected', ()=> {
    console.log('Database Connected Successfully');
});
mongoose.connection.on('error', ()=> {
    console.log('Error Occured');
});

//middlewares
app.use(cors());
app.use(express.json());

//routes
app.get('/', (req, res)=>{
    student.find()
    .exec()
    .then(result=>{
        console.log(result)
        res.status(200).send(result)
    })
    .catch(err=>{
        res.status(500).send(err)
    })
})

app.post('/students', (req, res)=> {
    const Students = new student({
        _id : new mongoose.Types.ObjectId,
        firstname : req.body.firstname,
        lastname : req.body.lastname,
        place : req.body.place
    });
    Students.save()
    .then(result=> {
        console.log(result)
        res.status(200).json({msg: "successfully submitted"})
    })
    .catch(err=>{
        console.log(err)
        res.status(500).json({msg: "Error Occurred"})
    })
})

//server
app.listen(5000, ()=>{
    console.log('server is connected to port:5000')
})