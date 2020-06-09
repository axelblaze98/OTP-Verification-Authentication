const express = require("express")
const route = express.Router()
const bodyparser = require("body-parser")
const twilio = require("../Twilio/login and verify.js")

route.use(bodyparser.json());

route.post('/register', (req, res) => {
    twilio.login(req,res)
});

route.post('/verify', (req, res) => {
    twilio.verify(req, res)
})

module.exports = route