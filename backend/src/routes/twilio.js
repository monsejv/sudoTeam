const Router = require('koa-router')

const twilio = require('../usecase/twilio')

const router = new Router({
  prefix: '/twilio'
})

router.post('/messages', async ctx => {
  // const conversatoinId = '23165584689'
  // const userId = '5d4b2059ebc135a8bbe67bab'

  const ctxBody = await ctx.request.body

  const message = await ctx.request.body.Body
  let atachment = ''

  const userWANumber = await ctx.request.body.From
  console.log(userWANumber)

  if (ctx.request.body.NumMedia > 0) {
    atachment = ctx.request.body.MediaUrl0 + '.jpg'
  }

  // console.log('----------------\nTwilio message:', message)
  console.log('----------------\nCtx Body:\n', ctxBody)

  // Enviar a watson
  // const response = await sendToWatson(message)
  // Enviar Respuesta a whatsapp
  // const response = await twilio.sendAnswer('Esta es una respuesta', userWANumber)

  // console.log('*********************\nResponse:\n', response)

  ctx.response.body = {
    message: 'menssaje send to watson succesufully'
  }

})

router.post('/response', ctx => {

})

module.exports = router
