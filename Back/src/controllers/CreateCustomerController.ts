import { FastifyReply, FastifyRequest } from "fastify";
import { CreateCustomerService } from "../services/CreateCustomerService";

interface CreateCustomerProps {
  name: string
  linkedin: string
  position: string
  image: string
}

class CreateCustomerController {
  async handle(request: FastifyRequest, reply: FastifyReply){
    const { name, linkedin, position, image } = request.body as CreateCustomerProps

    console.log('Received request body to space and beyond:', request.body)
    //inicializo o service
    const customerServices = new CreateCustomerService()

    //chamar o serviço acessando o método
    const customer = await customerServices.execute({ name, linkedin, position, image })

    //devolve para a api
    reply.send(customer)
  }
}

export { CreateCustomerController }