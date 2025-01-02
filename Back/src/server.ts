// Import the framework and instantiate it
import fastify, {FastifyInstance} from 'fastify'
import { routes } from './routes'

const app = fastify({
  logger: true
})

const start = async () => {

  await app.register(routes)
  // Run the server!
  try {
    await app.listen({ port: 3000 })
    console.log('servidor está rodando')
  } catch (err) {
    process.exit(1)
  }
}

start()