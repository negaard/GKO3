//henter match model
const Match = require('../Model/match');

//hardcoder ny user ud fra model-klasse
let match1 = new Match("Lukas", "Frederikke");

//controller
function matchController(req, res) {
    res.end(JSON.stringify(match1))
}

//eksporter controlleren
module.exports = matchController;