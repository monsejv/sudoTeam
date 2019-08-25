require('dotenv').config()
const Koa = require('koa')
const twilioRouter = require('./src/routes/twilio')
const watsonRouter = require('./src/routes/watson')
const koaBody = require('koa-body')

const app = new Koa()

app.use(koaBody())
app.use(twilioRouter.routes())
app.use(twilioRouter.allowedMethods())
app.use(watsonRouter.routes())
app.use(watsonRouter.allowedMethods())

app.listen(4000, () => {
  console.log('App escuchando en el puerto http://localhost:4000')
})
