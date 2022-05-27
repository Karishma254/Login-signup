const mongoose = require("mongoose");
const express = require("express");
const app = express();

const auth = require("./auth");
const User = require("./schema");
const server = require("./server");
const bookIdgen = require("bookidgen");
const env = require("env");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

app.use(express.json());
let tokenHeaderKey = "karishma";
let jwtSecretKey = "ahirwal";

app.post("/post/generateToken", (req, res) => {
  // Then generate JWT Token

  let jwtSecretKey = "ahirwal";
  let data = {
    time: Date(),
    userId: 12,
  };

  const token = jwt.sign(data, jwtSecretKey);

  res.send(token);
});

app.post("/register", async (req, res) => {
  try {
    // Get user input
    const { name, password, phone } = req.body;

    if (!(name && phone)) {
      res.send("All input is required");
    } else {
      const oldUser = await User.findOne({ phone });

      if (oldUser) {
        return res.send("User Already Exist. Please Login");
      } else {
        //Encrypt user password
        encryptedPassword = await bcrypt.hash(password, 10);
        const userid = bookIdgen("USE", 12343, 121383);

        const user = await User.create({
          userid,
          firstname,
          lastname,
          email: email.toLowerCase(),
          password: encryptedPassword,
          confirm_password,
        });
        res.json({ data: user });
      }
    }
  } catch (err) {
    console.log(err);
  }
});

app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!(email && password)) {
      res.send("All input is required");
    } else {
      const user = await User.findOne({ phone });
      console.log(user);
      let compare = await bcrypt.compare(password, user.password);
      console.log(compare);

      if (compare === true) {
        // Create token
        const token = jwt.sign({ phone }, "asdsadsa");
        // save user token
        user.token = token;
        console.log(token);

        // return new user
        res.json({ data: user, token });
      } else {
        res.send("wrong");
      }
    }
  } catch (err) {
    console.log(err);
  }
});

//Generate OTP
const otp = otpGenerator.generate(4, {
  alphabets: false,
  upperCase: false,
  specialChars: false,
});
const now = new Date();
const expiration_time = AddMinutesToDate(now, 10);

//Create OTP instance in DB
const otp_instance = User.create({
  otp: otp,
  expiration_time: expiration_time,
});
var details = {
  timestamp: now,
  check: phone,
  success: true,
  message: "OTP sent to user",
  otp_id: otp_instance.id,
};

const encoded = await encode(JSON.stringify(details));
if (phone) {
  if (phone == "VERIFICATION") {
    const message = require("../templates/SMS/phone_verification");
    phone_message = message(otp);
  } else if (phone == "FORGET") {
    const message = require("../templates/SMS/phone_forget");
    phone_message = message(otp);
  } else if (phone == "2FA") {
    const message = require("../templates/SMS/phone_2FA");
    phone_message = message(otp);
  } else {
    const response = {
      Status: "Failure",
      Details: "Incorrect incorrect password  Provided",
    };
    res.status(500).send(response);
  }
}

// Settings Params for SMS
var params = {
  Message: phone_message,
  Phone: phone,
};

publish
  .then(function (data) {
    return res.send({ Status: "Success", Details: encoded });
  })
  .catch(function (err) {
    return res.status(500).send({ Status: "Failure", Details: err });
  });

// }

// }

module.exports = app;
