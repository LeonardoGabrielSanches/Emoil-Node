import { inject, injectable } from 'tsyringe';
import { addMonths } from 'date-fns';
import { parseFromTimeZone } from 'date-fns-timezone';

import AppError from '../../../shared/Error/AppError';

import ICustomersRepository from '../../Customers/interfaces/repositories/ICustomersRepository';
import IOilsRepository from '../../Oil/interfaces/repositories/IOilsRepository';
import OilChange from '../entities/OilChange';
import IOilChangeRepository from '../interfaces/repositories/IOilChangeRepository';

interface IRequest {
  customer_id: string;
  oil_id: string;
}

@injectable()
class CreateOilChangeService {
  constructor(
    @inject('OilChangeRepository')
    private oilChangeRepository: IOilChangeRepository,
    @inject('CustomersRepository')
    private customersRepository: ICustomersRepository,
    @inject('OilsRepository')
    private oilsRepository: IOilsRepository,
  ) {}

  public async execute({ customer_id, oil_id }: IRequest): Promise<OilChange> {
    const customer = await this.customersRepository.findById(customer_id);

    if (!customer) throw new AppError('Cliente não existe');

    const oil = await this.oilsRepository.findById(oil_id);

    if (!oil) throw new AppError('Óleo não existe');

    const date = new Date();

    // const timeZone = 'America/Sao_Paulo';
    // const zonedDate = parseFromTimeZone(date, { timeZone });

    const expiration_date = addMonths(date, oil.expirationInMonth);

    const oilChange = await this.oilChangeRepository.create({
      customer,
      oil,
      expiration_date,
    });

    return oilChange;
  }
}

export default CreateOilChangeService;
