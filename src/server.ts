// Import the framework and instantiate it
import fastify from 'fastify'

const app = fastify({
  logger: true
})

const start = async () => {
  // Run the server!
  try {
    await app.listen({ port: 3000 })
    console.log('servidor está rodando')
  } catch (err) {
    process.exit(1)
  }
}

start()