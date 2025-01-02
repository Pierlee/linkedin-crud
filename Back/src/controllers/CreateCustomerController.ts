import { FastifyReply, FastifyRequest } from "fastify";
import { CreateCustomerService } from "../services/CreateCustomerService";

class CreateCustomerController {
  async handle(request: FastifyRequest, reply: FastifyReply){
    const { name, email } = request.body as { name: string, email: string }

    console.log('Received request body to space and beyond:', request.body)
    //inicializo o service
    const customerServices = new CreateCustomerService()

    //chamar o serviço acessando o método
    const customer = await customerServices.execute({ name, email })

    //devolve para a api
    reply.send(customer)
  }
}

export { CreateCustomerController }