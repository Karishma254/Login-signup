// const router = require("./router")
// const express = require("express")
// const app = express()
// const server = require("./server")
// const schema = require("./schema")
// const jsonparser = require("jsonparse")

// app.get("./get", async (req, res) => {
//   const data = await schema.find({})


//   try {
//     res.json({ message: "Data found", data: data, status: true });
//   } catch (error) {
//     res.json({ message: "Data not found", status: false });
//   }

// })

// app.post("/register", function (req, res) {
  
//     const data = new schema({
//       firstname: req.body.firstname,
//       lastname: req.body.lastname,
//       email: req.body.email,
//       password: req.password,
//       confirm_password: req.body.confirm_password
//     })
//     data.save().then((result) => {
//       jwt.sign({ result }, jwtkey, { expiresIn: "300s" }, (err, token) => {
//         res.status(201).json({ token })
//       })
//     })
//       .catch((err) => console.log(err)
//       )
//   })