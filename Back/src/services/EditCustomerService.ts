import prismaClient from "../prisma/prisma";

interface EditCustomerProps {
  id: string
  name: string
  email: string
}

class EditCustomerService{
  async execute({id, name, email}:EditCustomerProps){

    if(!id){
      throw new Error('hello error')
    }

    const findCustomer = await prismaClient.customer.findFirst({
      where:{
        id: id
      }
    })

    if(!findCustomer){
      throw new Error ('hello error')
    }

    //atualizacao no banco de dados
    const updatedCustomer = await prismaClient.customer.update({
      where: {
        id: findCustomer.id
      },
      data: {
        name: name,
        email: email,
      }
    })

    return updatedCustomer
  }
}

export { EditCustomerService }