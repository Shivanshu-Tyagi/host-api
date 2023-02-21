require('dotenv').config();
const mongoose = require('mongoose');

const validator = require('validator');
 
const studentSchema = new mongoose.Schema({
    name:{
        type : String,
        required : true,
        minlength : 3
    },
    address:{
        type : String,
        required : true
    },
    phone : {
        type : Number,
        required : true,
        unique : true,
        min : 10
        
    },
    email : {
        type : String,
        required : true,
        unique : [true,"Email is already present"],
        validator(value){
            if (!validator.isEmail(value)) {
                throw new Error("Invalid Email");
            }
        }
        
    },
    password : {
        type : String,
        required : true
    },
    confirmpassword : {
        type : String,
        required : true
    },
})

const Student = new mongoose.model('Student' , studentSchema);

module.exports = Student;


 
// const studentSchema = new mongoose.Schema({
//     name:{
//         type : String,
//         required : true,
//         minlength : 3
//     },
//     address:{
//         type : String,
//         required : true
//     },
//     phone : {
//         type : Number,
//         required : true,
//         unique : true,
//         min : 10
        
//     },
//     email : {
//         type : String,
//         required : true,
//         unique : [true,"Email is already present"],
//         validator(value){
//             if (!validator.isEmail(value)) {
//                 throw new Error("Invalid Email");
//             }
//         }
        
//     },
//     password : {
//         type : String,
//         required : true
//     },
//     confirmpassword : {
//         type : String,
//         required : true
//     },
//     tokens:[{
//         token:{
//             type : String,
//         required : true
//         }
//     }]
// })
// studentSchema.methods.generateToken = async function(){
//     try{
       
//         const token = jwt.sign({_id:this._id.toString()},process.env. SECRET_KEY)
//         this.tokens = this.tokens.concat({token:token})
//        await this.save();
//        console.log(token);
//         return token;

//     }catch(err){
//         res.send("the error part" + err);
//         console.log("the error part" + err);
//     }
// }
// const Student = new mongoose.model('Student' , studentSchema);

// module.exports = Student;