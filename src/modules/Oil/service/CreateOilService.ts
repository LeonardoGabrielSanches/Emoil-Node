import { injectable, inject } from 'tsyringe';
import IOilsRepository from '../interfaces/repositories/IOilsRepository';
import Oil from '../entities/Oil';

interface IRequest {
  name: string;
  expirationInMonth: number;
}

@injectable()
class CreateOilService {
  constructor(
    @inject('OilsRepository')
    private oilsRepository: IOilsRepository,
  ) {}

  public async execute({ name, expirationInMonth }: IRequest): Promise<Oil> {
    const oilNameAlreadyInUse = await this.oilsRepository.findByName(name);

    if (oilNameAlreadyInUse) throw new Error('Óleo já cadastrado.');

    const oil = await this.oilsRepository.create({
      name,
      expirationInMonth,
    });

    return oil;
  }
}

export default CreateOilService;
