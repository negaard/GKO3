//henter User model
const User = require('../Model/user');

//hardcoder ny user ud fra model-klasse
let User1 = new User('Lukas', 'Negaard', '20', "Jeg spiller computer");

//controller
function userController(req, res) {
    res.end(JSON.stringify(User1))
}

//eksporter controlleren
module.exports = userController;