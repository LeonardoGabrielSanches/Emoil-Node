import { container } from 'tsyringe';

import ICustomersRepository from '../../modules/Customers/interfaces/repositories/ICustomersRepository';
import CustomersRepository from '../../modules/Customers/repositories/CustomersRepository';

import IUsersRepository from '../../modules/Users/interfaces/repositories/IUsersRepository';
import UsersRepository from '../../modules/Users/repositories/UsersRepository';

import IOilsRepository from '../../modules/Oil/interfaces/repositories/IOilsRepository';
import OilsRepository from '../../modules/Oil/repositories/OilsRepository';

import IOilChangeRepository from '../../modules/OilChange/interfaces/repositories/IOilChangeRepository';
import OilChangeRepository from '../../modules/OilChange/repositories/OilChangeRepository';

container.registerSingleton<ICustomersRepository>(
  'CustomersRepository',
  CustomersRepository,
);

container.registerSingleton<IUsersRepository>(
  'UsersRepository',
  UsersRepository,
);

container.registerSingleton<IOilsRepository>('OilsRepository', OilsRepository);

container.registerSingleton<IOilChangeRepository>(
  'OilChangeRepository',
  OilChangeRepository,
);
