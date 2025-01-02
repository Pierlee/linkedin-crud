import { FastifyReply, FastifyRequest } from "fastify"
import { DeleteCustomerService } from "../services/DeleteCustomerService"

interface DeleteCustomerProps{
  id: string
}

class DeleteCustomerController {
  async handle(request: FastifyRequest, reply: FastifyReply){

    const {id} = request.query as DeleteCustomerProps

    const customerService = new DeleteCustomerService()

    const customer = customerService.execute({id})

    reply.send(customer)
  }
}

export { DeleteCustomerController }