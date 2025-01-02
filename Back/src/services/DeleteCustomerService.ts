import prismaClient from "../prisma/prisma"

interface DeleteCustomerProps{
  id: string
}

class DeleteCustomerService {
  async execute({id}: DeleteCustomerProps){

    if(!id){
      throw new Error('solicitacao inválida')
    }

    const findCustomer = await prismaClient.customer.findFirst({
      where:{
        id: id
      }
    })

    if(!findCustomer){
      throw new Error('customer not found')
    }

    //deletar cliente
    await prismaClient.customer.delete({
      where:{
        id: findCustomer.id
      }
    })

    return{message: "O cliente foi deletado"}
  }
}

export { DeleteCustomerService }