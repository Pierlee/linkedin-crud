import { FastifyReply, FastifyRequest } from "fastify";
import { EditCustomerService } from "../services/EditCustomerService";

class EditCustomerController {
  async handle(request: FastifyRequest, reply: FastifyReply){
    const { id } = request.params as { id: string }
    const { name, email } = request.body as { name: string, email: string }

    //inicializo o service
    const customerServices = new EditCustomerService()

    //chamar o serviço acessando o método
    await customerServices.execute({ id, name, email })

    //devolve para a api
    reply.send(200).send()
  }
}

export { EditCustomerController }