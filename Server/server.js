//Express setup
const express = require('express');
const app = express();
const port = 3000;
var bodyParser = require('body-parser');
app.use(bodyParser.json())
 
//henter controller fra sti
let userController = require('../Controller/userController');
let interestController = require("../Controller/interestController");
let matchedController = require("../Controller/matchController");


//read endpoint 
app.get('/user/', userController.userController);
app.get("/interest/", interestController.interestController);
app.get("/match/", matchedController.matchedController);
 
//Delete endpoint 
app.delete("/user/", userController.userDelController);
app.delete("/match/", matchedController.matchedDelController);
app.delete("/interest/", interestController.interestDelController);

//Create endpoint
app.post("/user/", userController.userCreateController)
app.post("/match/",matchedController.matchedCreateController)
app.post("/interest/",interestController.interestCreateController)

//Update endpoint
app.put("/user/", userController.userUpdateController)
app.put("/match/",matchedController.matchedUpdateController)
app.put("/interest/",interestController.interestUpdateController)


//server start
app.listen(port, () => {
    console.log(`Server-applikation lytter på http://localhost:${port}`)
  });

