const user = require("./schema.js");

register = (usname, email, mob) => {
    user.create(
        {
            username: usname,
            email: email,
            mobile_no: mob
        },
        (err, data) => {
            if (err) {
                console.log(err);
                res.send("Error Occured during Registration")
            } else {
                console.log(data);
                res.send("Registration Successful")
            }
        })
    user.find({}, (err, data) => {
        if (err) {
            console.log(err);
        }
        else {
            console.log(data);
        }
    })
}

module.exports = register