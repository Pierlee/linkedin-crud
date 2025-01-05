import prismaClient from "../prisma/prisma";

interface CreateCustomerProps {
  name: string
  linkedin: string
  position: string
  image: string
}

class CreateCustomerService{
  async execute({name, linkedin, position, image}:CreateCustomerProps){
    // if(!name || !email){
    //   throw new Error ('Necessario preencher os campos')
    // }

    const customer = prismaClient.customer.create({
      data:{
        name,
        linkedin,
        position,
        image,
        status: true,
      }
    })

    return customer
  }
}

export { CreateCustomerService }