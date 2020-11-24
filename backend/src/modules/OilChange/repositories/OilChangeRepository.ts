import { getRepository, Repository } from 'typeorm';
import ICreateOilChangeDTO from '../dtos/ICreateOilChangeDTO';
import OilChange from '../entities/OilChange';
import IOilChangeRepository from '../interfaces/repositories/IOilChangeRepository';

class OilChangeRepository implements IOilChangeRepository {
  private ormRepository: Repository<OilChange>;

  constructor() {
    this.ormRepository = getRepository(OilChange);
  }

  public async create({
    customer,
    oil,
    expiration_date,
  }: ICreateOilChangeDTO): Promise<OilChange> {
    const oilChange = this.ormRepository.create({
      customer,
      oil,
      expiration_date,
    });

    await this.ormRepository.save(oilChange);

    return oilChange;
  }

  public async getOilChangeByDate(date: Date): Promise<OilChange[]> {
    return this.ormRepository.find({
      where: { expiration_date: date },
      relations: ['customer', 'oil'],
    });
  }
}

export default OilChangeRepository;
