const Koa = require('koa')
const twilioRouter = require('./src/routes/twilio')
const koaBody = require('koa-body')

const app = new Koa()

app.use(koaBody())
app.use(twilioRouter.routes())
app.use(twilioRouter.allowedMethods())

app.listen(4000, () => {
  console.log('App escuchando en el puerto http://localhost:4000')
})
