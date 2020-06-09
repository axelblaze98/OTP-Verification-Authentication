const dotenv = require("dotenv");

dotenv.config();

module.exports = {
  port: process.env.PORT,
  sid: process.env.TWILIO_SID,
  token: process.env.TWILIO_TOKEN,
  service: process.env.SERVICE_SID,
  mongo: process.env.MONGO
};