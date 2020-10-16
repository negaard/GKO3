const express = require('express');
const app = express();
const port = 3000;
 
//henter controller fra sti
let userController = require('../Controller/userController');
let interestController = require("../Controller/interestController");
let matchedController = require("../Controller/matchController");
//read endpoint på routen '/'
app.get('/user/', userController);
app.get("/interest/", interestController);
app.get("/match/", matchedController);
 
app.listen(port, () => {
    console.log(`Server-applikation lytter på http://localhost:${port}`)
  });

