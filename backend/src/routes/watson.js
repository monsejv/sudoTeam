const Router = require('koa-router')

const router = new Router({
  prefix: '/watson'
})

router.post('/messages', async ctx => {

  // Enviar respuesta a Twilio
  const { text } = req.body;

  const params = {
    input: { text },
    workspace_id: process.env.WORKSPACE_ID
  };

})

module.exports = router
