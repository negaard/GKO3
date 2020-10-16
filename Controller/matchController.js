//henter match model
const Matched = require('../Model/match');

//hardcoder ny matched ud fra model-klasse
let matched1 = new Matched("Lukas", "Frederikke");
let matched2 = new Matched("Adam", "Sofie");
var matchedList = [matched1, matched2]

//Match read controller
function matchedController(req, res) {
    res.end(JSON.stringify(matchedList))
}
//Match delete controller
function matchedDelController(req,res) {
    if(req.query.matchedNumber) {
      console.log("Deleting match: " + req.query.matchedNumber);
var idx = matchedList.findIndex(x=>x.matchedNumber==req.query.matchedNumber) 
        matchedList.splice(idx, 1)
      res.status(200).send({});
    
    } else {
      res.status(400).send("Please specify a match ID");
    }
}

//match create controller
function matchedCreateController(req,res) {

}
//match update controller
function matchedUpdateController(req,res) {
    
}

//eksporter match controller
module.exports = {matchedDelController,matchedController,matchedCreateController, matchedUpdateController};