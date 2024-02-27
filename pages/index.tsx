import React from 'react'
import logger from '../src/utils/logger'

export default function Home() {
  logger.info({ log: 'hello', type: 'GET', url: '/hello' })
  return <h1>Hello, World</h1>
}
