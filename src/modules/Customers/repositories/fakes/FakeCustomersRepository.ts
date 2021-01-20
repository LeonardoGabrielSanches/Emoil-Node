import { uuid } from 'uuidv4';

import ICreateCustomerDTO from '../../dtos/ICreateCustomerDTO';
import ICustomersRepository from '../../interfaces/repositories/ICustomersRepository';

import Customer from '../../entities/Customer';

class CreateCustomersRepository implements ICustomersRepository {
  private customers: Customer[] = [];

  public async findById(id: string): Promise<Customer | undefined> {
    const findCustomer = this.customers.find(customer => customer.id === id);

    return findCustomer;
  }

  public async findAll(): Promise<Customer[]> {
    return this.customers;
  }

  public async findByEmail(email: string): Promise<Customer | undefined> {
    const findCustomer = this.customers.find(
      customer => customer.email === email,
    );

    return findCustomer;
  }

  public async create(data: ICreateCustomerDTO): Promise<Customer> {
    const customer = new Customer();

    Object.assign(customer, { id: uuid() }, data);

    this.customers.push(customer);

    return customer;
  }

  public async save(customer: Customer): Promise<Customer> {
    const findIndex = this.customers.findIndex(
      customerFind => customerFind.id === customer.id,
    );

    this.customers[findIndex] = customer;

    return customer;
  }
}

export default CreateCustomersRepository;
