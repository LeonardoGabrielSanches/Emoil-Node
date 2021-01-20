import ICreateCustomerDTO from '../../dtos/ICreateCustomerDTO';

import Customer from '../../entities/Customer';

interface ICustomersRepository {
  findById(id: string): Promise<Customer | undefined>;
  findByEmail(email: string): Promise<Customer | undefined>;
  create(data: ICreateCustomerDTO): Promise<Customer>;
  save(customer: Customer): Promise<Customer>;
  findAll(): Promise<Customer[]>;
}

export default ICustomersRepository;
