import prismaClient from "../prisma/prisma";

interface EditCustomerProps {
  id: string
  name: string
  linkedin: string
  image: string
  position: string
}

class EditCustomerService{
  async execute({id, name, linkedin, image, position}:EditCustomerProps){

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
        linkedin: linkedin,
        image: image,
        position: position,
      }
    })

    return updatedCustomer
  }
}

export { EditCustomerService }