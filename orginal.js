
// const mongoose = require('mongoose')
// const express = require("express")
// const app = express()

// const  auth = require("./auth")
// const User = require("./schema")
// const server = require("./server")
// const bookIdgen = require("bookidgen")
// const env = require("env")
// const bcrypt = require("bcrypt")
// const jwt =require("jsonwebtoken")

// app.use(express.json())
// let tokenHeaderKey = "karishma";
// let jwtSecretKey = "ahirwal";

// app.post("/post/generateToken", (req, res) => {
//     // Then generate JWT Token
  
//     let jwtSecretKey = "ahirwal";
//     let data = {
//         time: Date(),
//         userId: 12,
//     }
  
//     const token = jwt.sign(data, jwtSecretKey);
  
//     res.send(token);
// });


// app.post("/register", async (req, res) => {

//     try {
//       // Get user input
//       const { firstname, lastname, email, password,confirm_password } = req.body;

//       if (!(email && password && firstname)) {
//         res.send("All input is required");
//       }
//       else{
//         const oldUser = await User.findOne({ email });
  
//         if (oldUser) {
//           return res.send("User Already Exist. Please Login");
//         }
//         else{
//             //Encrypt user password
//         encryptedPassword = await bcrypt.hash(password, 10);
//         const userid = bookIdgen("USE",12343,121383)
        

//         const user = await User.create({
//           userid,
//           firstname,
//           lastname,
//           email: email.toLowerCase(),
//           password : encryptedPassword,
//           confirm_password
//         });
//         res.json({data: user})
//         }
//       }
    
//     } catch (err) {
//       console.log(err);
//     }
//   });

// app.post("/login", async (req, res) => {

//     try {
      
//       const { email, password } = req.body;
  
//       if (!(email && password)) {
//         res.send("All input is required");
//       }
//       else{
    
//       const user = await User.findOne({ email });
//       console.log(user)
//       let compare = await bcrypt.compare(password, user.password)
//       console.log(compare)
  
//       if (compare===true) {
//         // Create token
//         const token = jwt.sign(
//             { email },
//             "asdsadsa"
     
//           );
//           // save user token
//           user.token = token;
//           console.log(token)
      
//           // return new user
//           res.json({data: user, token});
//       }
//       else{
//           res.send("wrong")
//       }
    
//       }
//     } catch (err) {
//       console.log(err)
//     }
// })