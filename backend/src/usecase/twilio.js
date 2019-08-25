const twilioClient = require('../lib/twilio')

const twilioWANumber = process.env.TWILIO_PROVITIONAL_WHATSAPP_NUMBER

const sendWatsonResponse = async (response, clientWANumber) => {
  try {
    const messageSid = await twilioClient.messages.create({
      from: twilioWANumber,
      to: clientWANumber,
      body: response
    })
    console.log('°°°°°°°°°°°°°°°°°°°°°°\n', messageSid)
  } catch (e) {
    console.log('ERROR: ', e)
  }
}

const sendAnswer = async (answer, clientWANumber) => {
  try {
    const messageSid = await twilioClient.messages.create({
      from: twilioWANumber,
      to: clientWANumber,
      body: answer
    })
    console.log('°°°°°°°°°°°°°°°°°°°°°°\n', messageSid)
  } catch (e) {
    console.log('ERROR: ', e)
  }
}

module.exports = {
  sendWatsonResponse,
  sendAnswer
}