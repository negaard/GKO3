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

//eksporter controlleren
module.exports = {interestController, interestDelController};