//henter match model
const Matched = require('../Model/match');

//hardcoder ny user ud fra model-klasse
let matched1 = new Matched("Lukas", "Frederikke");

//controller
function matchedController(req, res) {
    res.end(JSON.stringify(matched1))
}

//eksporter controlleren
module.exports = matchedController;