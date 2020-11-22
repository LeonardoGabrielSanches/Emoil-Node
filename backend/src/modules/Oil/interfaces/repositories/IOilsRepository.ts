import ICreateOilDTO from '../../dtos/lCreateOilDTO';
import Oil from '../../entities/Oil';

interface IOilsRepository {
  findById(id: string): Promise<Oil | undefined>;
  findByName(name: string): Promise<Oil | undefined>;
  create(data: ICreateOilDTO): Promise<Oil>;
  save(oil: Oil): Promise<Oil>;
  findAll(): Promise<Oil[]>;
}

export default IOilsRepository;
