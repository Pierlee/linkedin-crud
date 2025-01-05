import { FastifyReply, FastifyRequest } from "fastify";
import { EditCustomerService } from "../services/EditCustomerService";
interface EditCustomerProps{
  name: string
  linkedin: string
  image: string
  position: string
}
class EditCustomerController {
  async handle(request: FastifyRequest, reply: FastifyReply){
    const { id } = request.params as { id: string }
    const { name, linkedin, image, position } = request.body as EditCustomerProps

    //inicializo o service
    const customerServices = new EditCustomerService()

    //chamar o serviço acessando o método
    await customerServices.execute({ id, name, linkedin, image, position })

    //devolve para a api
    reply.send(200).send()
  }
}

export { EditCustomerController }