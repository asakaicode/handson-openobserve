import express from 'express'
import logger from '../src/utils/logger'
import { createEngine } from './createEngine'

process.on('unhandledRejection', (reason, p) => {
  console.log('Unhandled Rejection at:', p, 'reason:', reason)
  // application specific logging, throwing an error, or other logic here
})

void (() => {
  const app = express()

  // set app
  const isTsNodeDev = Object.keys(require.cache).some((key) =>
    key.includes('ts-node-dev')
  )
  const ext = isTsNodeDev ? 'tsx' : 'js'
  const splitPath = __dirname.split('/')
  splitPath.pop()
  const pathOfPages = splitPath.join('/') + '/pages'
  app.set('views', pathOfPages)
  app.set('view engine', ext)
  app.engine(ext, createEngine())

  app.get('/', (_, res) => {
    res.render('index')
  })
  app.get('/hello', (_, res) => {
    res.send('Hello World')
    logger.info({ log: 'hello', type: 'GET', url: '/hello' })
  })
  app.listen(3020, () => {
    console.log('> Ready on http://localhost:3020')
  })
})()
