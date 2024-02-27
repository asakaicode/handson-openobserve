import pinoOpenObserve from '@openobserve/pino-openobserve'
import express from 'express'
import pino from 'pino'

process.on('unhandledRejection', (reason, p) => {
  console.log('Unhandled Rejection at:', p, 'reason:', reason)
  // application specific logging, throwing an error, or other logic here
})

const options = {
  clientToken: 'rum8GyDzI2t1i54HUjL',
  applicationId: 'web-application-id',
  site: 'http://localhost:5081',
  service: 'my-web-application',
  env: 'production',
  version: '0.0.1',
  organizationIdentifier: 'default',
  apiVersion: 'v1',
}

const logger = pino({ level: 'info' }, new pinoOpenObserve({
  url: options.site,
  organization: options.organizationIdentifier,
  auth: {
    username: "root@example.com",
    password: "Complexpass#123",
  },
  streamName: 'AAA',
  batchSize: 1,
  timeThreshold: 15 * 1000
}))

void(() => {
  const app = express()
  app.get('/hello', (_, res) => {
    res.send('Hello World')
    logger.info({ log: "entry get hello", type: "GET", url: "/hello" })
  })
  app.listen(5085, () => {
    console.log('> Ready on http://localhost:5085')
  })
})()