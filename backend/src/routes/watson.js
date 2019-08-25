const Router = require('koa-router')
const watsonClient = require('../lib/watson')

const router = new Router({
  prefix: '/watson'
})

router.post('/messages', async ctx => {

  // Enviar respuesta a Twilio
  const { text } = ctx.request.body;

  const params = {
    input: { text },
    workspace_id: process.env.WORKSPACE_ID
  };

  watsonClient.message(params, (err, response) => {
    console.log(params)
    if (err) {
      console.error(err);
      ctx.status = 500;
    } 
    else {
      ctx.response.body = {response:response} 
      console.log(ctx.response.body.response)
    }
  });
})

module.exports = router
