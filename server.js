require('dotenv').config();
const winston = require('winston');
const Koa = require('koa');
const Router = require('koa-router');
const logger = require('koa-logger');
const cors = require('@koa/cors');
const bodyParser = require('koa-bodyparser');
const helmet = require('koa-helmet');
const respond = require('koa-respond');
const axios = require('axios');

const app = new Koa();
const router = new Router();

app.use(helmet());

if (process.env.NODE_ENV === 'development') {
  app.use(logger());
}

app.use(cors());
app.use(bodyParser({
  enableTypes: ['json'],
  jsonLimit: '5mb',
  strict: true,
  onerror: function (err, ctx) {
    ctx.throw('body parse error', 422)
  }
}));

app.use(respond());

router.get('/', async (ctx) => {
  ctx.body = {
    status: 'success',
    message: 'hello, world!'
  };
});

router.post('/api/invite', async (ctx) => {
  try {
    const { email } = ctx.request.body;
    const data = `email=${email}`;
    const options = {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': `Bearer ${process.env.SLACK_TOKEN}`
      },
    }
    const res = await axios.post(`${process.env.INVITE_URL}/users.admin.invite`, data, options);
    if (res.data.ok) {
      ctx.status = 200;
      return ctx.body = {
        status: 'success',
        message: 'Invite has successfully been sent.'
      };
    }
    ctx.status = 400;
    return ctx.body = {
      status: 'failure',
      message: `Problem sending invite to the email specified. ${res.data.error}`
    }
  } catch (error) {
    ctx.status = 500;
    throw error;
  }
});

app.use(router.routes());

const port = process.env.PORT || 3000
app.listen(port, () => winston.info(`API server started on ${port}`))
