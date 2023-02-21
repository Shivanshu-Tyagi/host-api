const express = require('express');
require('./db/conn');
const Student = require("./model/students")
const app = express();
const port = process.env.PORT || 4000;

app.get('/' , (req,res)=>{
    res.send('something is going to be happen');
})
app.use(express.json());
app.post('/students',(req,res)=>{
    //     try{
    //         const password = req.body.password;
    //         const cpassword = req.body.confirmpassword;
    
    //         if(password == cpassword){
    //             const user = new Student(req.body);
    //             const token = await registerEmp.generateToken();
    //             const registered = await registerEmp.save();
    //             user.save().then(()=>{
    //                 res.status(201).send(user);
    //             });
    //         }else{
    //             res.send("incrorrect password")
    //         }
    
    //     }catch(err){
    //         res.status(400).send(err);
    //     }
    // })
    
    console.log(req.body);
    const user = new Student(req.body);
    user.save().then(()=>{
        res.status(201).send(user);
    }).catch((e)=>{
        res.status(400).send(e);
    }) 
});


app.post("/login" , async(req ,res)=>{
    try{
        const email = req.body.email;
        const password = req.body.password;

        const useremail = await Student.findOne({email:email});
        // const token = await useremail.generateToken();
        if (useremail.password === password) {
            res.status(201).send(user);
        }else{
            res.send("incorrect password")
        }

    }catch(err){
        res.status(400).send(err);
    }
})

app.listen(port,()=>{
    console.log(`connecting wwith server ${port}`);
})
