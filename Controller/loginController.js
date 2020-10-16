const jwt = require('../Server/node_modules/jsonwebtoken');
const { BADQUERY } = require('dns');
var apiUsers = [{username: "admin", password: "passw0rd"}]
//generate token for correct credentials
function loginController(req,res) {
    idx = apiUsers.findIndex(x=>x.username==req.body.username)
    if (idx==-1){
        res.status(400).send("unknown user");
    } else {
        if (req.body.password==apiUsers[idx].password) {
            token = jwt.sign ({username:apiUsers[idx].username}, "supersecretpassword", (err,token)=>{
                res.json({token:token})

            })
        } else {
           res.status(400).send("invalid credentials") 
        }
    }}

    //verify token
function verifyToken(req, res, next) {
    //get auth header value
    const bearerHeader = req.headers["authorization"];
    //check if bearer is undef
    if(typeof bearerHeader !== "undefined") {
        //split at space
        const bearer =bearerHeader.split(" ");
        //get token from array
        const bearerToken = bearer [1];
        //set the token
        req.token = bearerToken
      jwt.verify(bearerToken,"supersecretpassword",(err,apiUser)=>{
          if (err) {
            return res.status(403).json({error: "not authorized"})
          }else {
              req.apiUser=apiUser
              return next();
          }

      })
        //next middleware
        next();
        
    }else {
        res.sendStatus(403);
    }
}


        module.exports = {loginController, verifyToken}