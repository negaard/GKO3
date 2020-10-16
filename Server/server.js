//Express setup
const express = require('express');
const jwt = require('jsonwebtoken');
const app = express();
const port = 3000;
var bodyParser = require('body-parser');
app.use(bodyParser.json());


 
//henter controller fra sti
let userController = require('../Controller/userController');
let interestController = require("../Controller/interestController");
let matchedController = require("../Controller/matchController");
let loginController = require("../Controller/loginController")

//login endpoint
app.post("/login/", loginController.loginController)


//read endpoint 
app.get('/user/', loginController.verifyToken, userController.userController);
app.get("/interest/", loginController.verifyToken, interestController.interestController);
app.get("/match/", loginController.verifyToken, matchedController.matchedController);
 
//Delete endpoint 
app.delete("/user/", loginController.verifyToken, userController.userDelController);
app.delete("/match/", loginController.verifyToken, matchedController.matchedDelController);
app.delete("/interest/",loginController.verifyToken, interestController.interestDelController);

//Create endpoint
app.post("/user/", loginController.verifyToken, userController.userCreateController)
app.post("/match/",loginController.verifyToken, matchedController.matchedCreateController)
app.post("/interest/",loginController.verifyToken, interestController.interestCreateController)

//Update endpoint
app.put("/user/", loginController.verifyToken, userController.userUpdateController)
app.put("/match/",loginController.verifyToken, matchedController.matchedUpdateController)
app.put("/interest/",loginController.verifyToken, interestController.interestUpdateController)


//server start
app.listen(port, () => {
    console.log(`Server-applikation lytter på http://localhost:${port}`)
  });

