//henter User model
const Interest = require('../Model/interest');

//hardcoder ny interest
let interest1 = new Interest("Computerspil");

//controller
function interestController(req, res) {
    res.end(JSON.stringify(interest1))
}

//eksporter controlleren
module.exports = interestController;