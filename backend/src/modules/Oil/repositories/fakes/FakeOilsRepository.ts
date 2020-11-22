import ICreateOilDTO from '../../dtos/lCreateOilDTO';
import Oil from '../../entities/Oil';
import IOilsRepository from '../../interfaces/repositories/IOilsRepository';

class FakeOilsRepository implements IOilsRepository {
  private oils: Oil[] = [];

  findAll(): Promise<Oil[]> {
    throw new Error('Method not implemented.');
  }

  public async findById(id: string): Promise<Oil | undefined> {
    throw new Error('Method not implemented.');
  }

  public async findByName(name: string): Promise<Oil | undefined> {
    throw new Error('Method not implemented.');
  }

  public async create(data: ICreateOilDTO): Promise<Oil> {
    throw new Error('Method not implemented.');
  }

  public async save(oil: Oil): Promise<Oil> {
    throw new Error('Method not implemented.');
  }
}

export default FakeOilsRepository;
