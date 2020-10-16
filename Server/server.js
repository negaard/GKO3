const express = require('express');
const app = express();
const port = 3000;
 
//henter controller fra sti
let userController = require('../Controller/userController');
let interestController = require("../Controller/interestController");
let matchedController = require("../Controller/matchController");

//read endpoint på routen '/'
app.get('/user/', userController.userController);
app.get("/interest/", interestController.interestController);
app.get("/match/", matchedController.matchedController);
 
//Delete endpoint på routen '/'
app.delete("/user/", userController.userDelController);
app.delete("/match/", matchedController.matchedDelController);
app.delete("/interest/", interestController.interestDelController);

app.listen(port, () => {
    console.log(`Server-applikation lytter på http://localhost:${port}`)
  });

