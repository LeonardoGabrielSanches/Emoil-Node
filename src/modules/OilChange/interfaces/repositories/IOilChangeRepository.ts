import ICreateOilChangeDTO from '../../dtos/ICreateOilChangeDTO';
import OilChange from '../../entities/OilChange';

export default interface IOilChangeRepository {
  create(data: ICreateOilChangeDTO): Promise<OilChange>;
  getOilChangeByDate(date: Date): Promise<OilChange[]>;
}
