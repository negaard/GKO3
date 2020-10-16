//definerer model-klasse for User
class User {
    static accountNumber = 1;
    constructor(fname, lname, age, bio) {
        this.fname = fname;
        this.lname = lname;
        this.age = age;
        this.bio = bio;
        this.accountNumber = User.accountNumber ++;
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
class Image {
    constructor(imagesize, uploadtime, filename) {
    this.imagesize = imagesize;
    this.uploadtime = uploadtime;
    this.filename = filename;
}
}


//eksporter user
module.exports = User;