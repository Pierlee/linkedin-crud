import prismaClient from "../prisma/prisma";

interface CreateCustomerProps {
  name: string
  image: string
  position: string
  linkedin: string
}

class CreateCustomerService{
  async execute({name, image, position, linkedin}:CreateCustomerProps){
    // if(!name || !email){
    //   throw new Error ('Necessario preencher os campos')
    // }

    const customer = prismaClient.customer.create({
      data:{
        name,
        image,
        position,
        linkedin,
        status: true,
      }
    })

    return customer
  }
}

export { CreateCustomerService }