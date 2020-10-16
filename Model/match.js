//create matched class
class Matched {
    static matchedNumber = 1;
    constructor (user1, user2) {
    this.user1 = user1;
    this.user2 = user2;
    this.matchedNumber = Matched.matchedNumber ++;
    }
}
//eksporter match
module.exports = Matched;