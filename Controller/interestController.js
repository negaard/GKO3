//henter Interest model
const Interest = require('../Model/interest');

//hardcoder ny interest
let interest1 = new Interest("Computerspil");
let interest2 = new Interest("Karate")
var interestList = [interest1, interest2]
//interest read controller
function interestController(req, res) {
    res.end(JSON.stringify(interestList))
}

//Interest delete controller
function interestDelController(req,res) {
    if(req.query.interestNumber) {
      console.log("Deleting interest: " + req.query.interestNumber);
var idx = interestList.findIndex(x=>x.interestNumber==req.query.interestNumber) 
        interestList.splice(idx, 1)
      res.status(200).send({});
    
    } else {
      res.status(400).send("Please specify a match ID");
    }
}

//User create controller
function interestCreateController(req,res) {
    var json= req.body;
    interestx=new Interest (json.interest)
    interestList.push(interestx);
    res.status(200).send({});
    }

//User update controller
function interestUpdateController(req,res) {
    
}

//eksporter interest controller
module.exports = {interestController, interestDelController,interestCreateController,interestUpdateController};