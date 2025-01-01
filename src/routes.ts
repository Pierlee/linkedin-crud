import {FastifyInstance, FastifyReply, FastifyRequest} from 'fastify'
import { CreateCustomerController } from './controllers/CreateCustomerController'
import { ListCustomerController } from './controllers/ListCustomerController'

export async function routes(fastify: FastifyInstance) {
  fastify.get('/teste', async (request: FastifyRequest, reply: FastifyReply) => {
    return { ok: true }
  })
  fastify.post('/customer', async(request: FastifyRequest, reply: FastifyReply) => {
    return new CreateCustomerController().handle(request, reply)
  })
  fastify.get('/customers', async(request: FastifyRequest, reply: FastifyReply) => {
    return new ListCustomerController().handle(request, reply)
  })
} 