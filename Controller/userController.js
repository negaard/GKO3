//henter User model
const User = require('../Model/user');

//hardcoder ny user ud fra model-klasse
let User1 = new User('Lukas', 'Negaard', '20', "Jeg spiller computer");
let User2 = new User("Frederikke", "Kristensen", "20", "Jeg kan godt lide karate");
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

//User create controller
function userCreateController(req,res) {
var json= req.body;
userx=new User (json.fname, json.lname, json.age, json.bio)
userList.push(userx);
res.status(200).send({});
}
//User update controller
function userUpdateController(req,res) {
    var json =req.body;
var idx = userList.findIndex (x=> x.accountNumber==json.accountNumber)
if (idx == -1){
    res.status(400).send("invalid account number: "+json.accountNumber);

} else {
    if (req.body.fname){userList[idx].fname=req.body.fname}
    if (req.body.lname){userList[idx].lname=req.body.lname}
    if (req.body.age){userList[idx].age=req.body.age}
    if (req.body.bio){userList[idx].bio=req.body.bio}
    res.status(200).send({})
}

}

//eksporter user controller
module.exports = {userDelController,userController, userCreateController, userUpdateController};