require('dotenv').config()
const AssistantV1 = require('ibm-watson/assistant/v1');

const assistant = new AssistantV1({
    version: process.env.VERSION_WATSON,
    iam_apikey: process.env.API_KEY_WATSON,
    url: process.envURL_WATSON
  })

  module.exports = watsonClient

