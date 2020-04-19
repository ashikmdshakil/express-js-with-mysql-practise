var express = require('express');
var router = express.Router();
var myDb = require('../Database/database');

var students = new Array();

myDb.connect((err) =>{
    if(err){
        console.log("Error occured on database connectivity .......");
    }
    else{
        console.log("Database connection is successfull .......");
    }
});

router.get('/',(request, response) =>{
    response.render('index');
});




router.post('/info',(request, response) =>{
    
    let query = "insert into student(name, department) values('"+request.body.name+"', '"+request.body.department+"')";
    myDb.query(query, (err , result) =>{
        if(err){
            console.log("Data insertion went wrong.");
        }
        else{
            console.log("Data insertion is successfull");
        }
    });
    
    response.redirect('/students');
    
});


router.get('/students',(request, response) =>{ 
    myDb.query('select * from student', (err, result) =>{
        if(err){
            console.log("Something went wrong .....");
        }
        else{
            result.forEach(element => {
                students.push(element);
            });
        }
        console.log(students);
        response.render('students',{student : students});
    });
});

router.get('/students/api',(request, response) =>{ 
    myDb.query('select * from student', (err, result) =>{
        if(err){
            console.log("Something went wrong .....");
        }
        else{
            result.forEach(element => {
                students.push(element);
            });
        }
        console.log(students);
        response.send(students);
    });
});
module.exports = router;
