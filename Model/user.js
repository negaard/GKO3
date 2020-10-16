//definerer model-klasse for User
class User {
    constructor(fname, lname, age, bio, image) {
        this.fname = fname;
        this.lname = lname;
        this.age = age;
        this.bio = bio;
        this.image = image;
    }
}
//payment user med creditcard
class PaymentUser extends User {
    constructor(fname, lname, age, bio, creditcard, image) {
    super(fname, lname, age, bio, image);
    this.creditcard = creditcard;
    }
}
//free user uden creditcard
class FreeUser extends User {
    constructor(fname, lname, age, bio, image) {
        super(fname, lname, age, bio, image);
    }
}

//eksporter user
module.exports = User;