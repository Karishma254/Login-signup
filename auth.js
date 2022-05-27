
const express = require("express")
const app = express()


app.get("/user/validateToken", (req, res) => {
    // Tokens are generally passed in header of request
    // Due to security reasons.
  
    let tokenHeaderKey = "karishma";
    let jwtSecretKey = "ahirwal";
  
    try {
        const token = req.header(tokenHeaderKey);
  
        const verified = jwt.verify(token, jwtSecretKey);
        if(verified){
           res.send("Successfully Verified");
        }else{
        
            res.status(401).send(error);
        }
    } catch (error) {

         res.status(401).send(error);
    }
});