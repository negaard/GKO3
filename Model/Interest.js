class Interest {
    static interestNumber = 1;
    constructor (interest) {
        this.interest = interest
        this.interestNumber = Interest.interestNumber ++;
    }
}
//eksporter interest
module.exports = Interest;