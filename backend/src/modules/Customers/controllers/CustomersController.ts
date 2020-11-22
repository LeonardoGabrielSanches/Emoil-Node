import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { classToClass } from 'class-transformer';
import CustomersRepository from '../repositories/CustomersRepository';

import CreateCustomerService from '../services/CreateCustomerService';

export default class CustomersController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { name, email } = request.body;

    const createCustomer = container.resolve(CreateCustomerService);

    const customer = await createCustomer.execute({ name, email });

    return response.json(customer);
  }

  public async index(request: Request, response: Response): Promise<Response> {
    const customersRepository = container.resolve(CustomersRepository);

    const customers = await customersRepository.findAll();

    if (customers.length <= 0) return response.status(204).send();

    return response.json(classToClass(customers));
  }
}
