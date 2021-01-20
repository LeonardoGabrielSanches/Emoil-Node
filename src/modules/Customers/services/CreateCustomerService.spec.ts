import FakeCustomersRepository from '../repositories/fakes/FakeCustomersRepository';

import CreateCustomerService from './CreateCustomerService';

describe('CreateCustomer', () => {
  it('should be able to create a new customer', async () => {
    const fakeCustomersRepository = new FakeCustomersRepository();

    const createCustomer = new CreateCustomerService(fakeCustomersRepository);

    const customer = await createCustomer.execute({
      name: 'Leonardo Gabriel Sanches',
      email: 'sleonardogabriel@gmail.com',
    });

    expect(customer).toHaveProperty('id');
  });

  it('should not be able to create a new user with same email from another', async () => {
    const fakeCustomersRepository = new FakeCustomersRepository();

    const createCustomer = new CreateCustomerService(fakeCustomersRepository);

    const customer = await createCustomer.execute({
      name: 'Leonardo Gabriel Sanches',
      email: 'sleonardogabriel@gmail.com',
    });

    expect(
      createCustomer.execute({
        name: 'Leonardo Gabriel Sanches',
        email: 'sleonardogabriel@gmail.com',
      }),
    ).rejects.toBeInstanceOf(Error);
  });
});
