import {FastifyInstance, FastifyReply, FastifyRequest} from 'fastify'

export async function routes(fastify: FastifyInstance) {
  fastify.get('/teste', async (request: FastifyRequest, reply: FastifyReply) => {
    return { ok: true }
  })
}