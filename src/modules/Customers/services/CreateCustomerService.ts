import { injectable, inject } from 'tsyringe';

import Customer from '../entities/Customer';
import ICustomersRepository from '../interfaces/repositories/ICustomersRepository';

interface IRequest {
  name: string;
  email: string;
}

@injectable()
class CreateCustomerService {
  constructor(
    @inject('CustomersRepository')
    private customersRepository: ICustomersRepository,
  ) {}

  public async execute({ name, email }: IRequest): Promise<Customer> {
    const emailAlreadyInUse = await this.customersRepository.findByEmail(email);

    if (emailAlreadyInUse) throw new Error('E-mail já está em uso.');

    const customer = await this.customersRepository.create({ name, email });

    return customer;
  }
}

export default CreateCustomerService;
