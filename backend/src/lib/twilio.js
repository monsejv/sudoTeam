require('dotenv').config()
const Twilio = require('twilio')

const accountSid = process.env.TWILIO_ACCOUNT_SID
const authToken = process.env.TWILIO_AUTH_TOKEN
const twilioClient = new Twilio(accountSid, authToken)

module.exports = twilioClient
