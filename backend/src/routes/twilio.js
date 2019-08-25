const Router = require('koa-router')

const twilio = require('../usecase/twilio')
const watson = require('../usecase/watson')

const router = new Router({
  prefix: '/twilio'
})

router.post('/messages', async ctx => {
  const userWANumber = await ctx.request.body.From

  let atachment = ''
  if (ctx.request.body.NumMedia > 0) {
    atachment = ctx.request.body.MediaUrl0 + '.jpg'
  }

  // const ctxBody = await ctx.request.body
  // console.log('----------------\nCtx Body:\n', ctxBody)

  const message = await ctx.request.body.Body
  // console.log('----------------\nTwilio message:', message)

  // Enviar a watson y guardar en variable la respuesta
  const watsonResponse = await watson.chat(message)

  // Enviar Respuesta a whatsapp
  twilio.sendAnswer(watsonResponse, userWANumber)

  ctx.response.body = {
    message: 'menssaje send to watson succesufully'
  }

})

module.exports = router
