const Router = require('koa-router')

const twilio = require('../usecase/twilio')

const router = new Router({
  prefix: '/twilio'
})

router.post('/messages', async ctx => {
  const userWANumber = await ctx.request.body.From
  console.log(userWANumber)

  let atachment = ''
  if (ctx.request.body.NumMedia > 0) {
    atachment = ctx.request.body.MediaUrl0 + '.jpg'
  }

  // const ctxBody = await ctx.request.body
  // console.log('----------------\nCtx Body:\n', ctxBody)

  // const message = await ctx.request.body.Body
  // console.log('----------------\nTwilio message:', message)

  // Enviar a watson y guardar en variable la respuesta
  // const response = await sendToWatson(message)

  // Enviar Respuesta a whatsapp
  twilio.sendAnswer('Esta es una respuesta', userWANumber)

  ctx.response.body = {
    message: 'menssaje send to watson succesufully'
  }

})

router.post('/response', ctx => {

})

module.exports = router
