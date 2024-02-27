import pino from 'pino'
import pinoOpenObserve from '@openobserve/pino-openobserve'

const options = {
  site: 'http://localhost:5080',
  organizationIdentifier: 'default'
}

const logger = pino(
  { level: 'info' },
  new pinoOpenObserve({
    url: options.site,
    organization: options.organizationIdentifier,
    auth: {
      username: 'root@example.com',
      password: 'Complexpass#123'
    },
    streamName: 'AAA',
    batchSize: 1,
    timeThreshold: 15 * 1000
  })
)

export default logger
