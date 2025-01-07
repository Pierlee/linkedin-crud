import prismaClient from "../prisma/prisma";

interface EditCustomerProps {
  id: string
  name: string
  image: string
  position: string
  linkedin: string
}

class EditCustomerService{
  async execute({id, name, image, position, linkedin}:EditCustomerProps){

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
        image: image,
        position: position,
        linkedin: linkedin,
      }
    })

    return updatedCustomer
  }
}

export { EditCustomerService }