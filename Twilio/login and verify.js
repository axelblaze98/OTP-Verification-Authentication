const { sid, token, service } = require("../config.js");
const register = require("../Database/entry.js")
const client = require("twilio")(sid, token);

var mob, usname, email;
login = (req, res)=>{
    mob = req.body.ph_num;
    usname = req.body.username;
    email = req.body.email;
    console.log(mob)
    client.verify
      .services(service)
      .verifications.create({
        to: `+91${mob}`,
        channel: "sms",
      })
      .then((data) => {
          if (data.lookup.carrier.name == null) {
              res.send("Mobile Number not found")
              console.log(data)
          }
          else {
              res.send("Please Enter OTP")
              console.log(data)
          }
      })
      .catch((err) => {
        res.send(err);
      });
}

verify = (req, res) => {
    const otp = req.body.code;
    client.verify                      
        .services(service)
        .verificationChecks
        .create({
            to: `+91${mob}`,
            code: otp
        })
        .then((data) => {
            if (data.status == "approved") {
                register(usname, email, mob)
                res.send("OTP Verified")
            }
            else {
                res.send("Incorrect OTP")
                console.log(data)
            }
            })
        .catch((err) => {
            res.send(err);
        });
    
}

module.exports = {
    login,
    verify
}