//definerer model-klasse for User
class User {
    constructor(fname, lname, age, bio) {
        this.fname = fname;
        this.lname = lname;
        this.age = age;
        this.bio = bio;
    }
}
//payment user med creditcard
class PaymentUser extends User {
    constructor(fname, lname, age, bio, creditcard) {
    super(fname, lname, age, bio);
    this.creditcard = creditcard;
    }
}
//free user uden creditcard
class FreeUser extends User {
    constructor(fname, lname, age, bio) {
        super(fname, lname, age, bio);
    }
}

//eksporter user
module.exports = User;