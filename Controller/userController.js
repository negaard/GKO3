//henter User model
const User = require('../Model/user');

//hardcoder ny user ud fra model-klasse
let User1 = new User('Lukas', 'Negaard', '20', "Jeg spiller computer");
let User2 = new User("Frederikke", "Kristensen", "20", "Karate");
var userList = [User1, User2]

//User read controller
function userController(req, res) {
    res.end(JSON.stringify(userList))
}

//User delete controller
function userDelController(req,res) {
    if(req.query.accountNumber) {
      console.log("Deleting account: " + req.query.accountNumber);
var idx = userList.findIndex(x=>x.accountNumber==req.query.accountNumber) 
        userList.splice(idx, 1)
      res.status(200).send({});
    
    } else {
      res.status(400).send("Please specify a user ID");
    }
}


//eksporter controlleren
module.exports = {userDelController,userController};