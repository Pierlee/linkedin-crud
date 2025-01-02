import prismaClient from "../prisma/prisma"

class ListCustomerService {
  async execute() {
    const customers = await prismaClient.customer.findMany()

    return customers
  }
}

export { ListCustomerService }