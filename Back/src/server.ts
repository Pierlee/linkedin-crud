// Import the framework and instantiate it
import fastify from 'fastify'
import { routes } from './routes'
import cors from '@fastify/cors'

const app = fastify({
  logger: true
})

const start = async () => {

  await app.register(routes)
  // Run the server!
  await app.register(cors)
  try {
    await app.listen({ port: 3000 })
    console.log('servidor está rodando')
  } catch (err) {
    process.exit(1)
  }
}

start()