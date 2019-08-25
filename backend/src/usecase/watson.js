const watsonClient = require('../lib/watson')

const chat = async (text) => {
  const params = {
    input: { text },
    workspace_id: process.env.WORKSPACE_ID
  }

  const watsonResponse = await watsonClient.message(params)

  console.log(JSON.stringify(watsonResponse))
  const messageResponse = watsonResponse.output.generic[0].text

  return messageResponse
}

module.exports = {
  chat
}