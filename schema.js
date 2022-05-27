// const mongoose = require("mongoose")
// const Rigester = mongoose.Schema({
//     userId:{type:String},
//     firstname: { type:String},   
//     lastname: { type:String },
//     email: { type:String },
//     password: { type:String },
//     confirm_password: { type:String }

// })
// module.exports = mongoose.model("Rigester",Rigester)


const mongoose = require("mongoose");
const schema = mongoose.Schema({
  name: { type: String },
  password: { type: String },
  phone: { type: Number },
});

module.exports =  mongoose.model("user", schema);
