import { getRepository, Repository } from 'typeorm';

import ICreateUserDTO from '../dtos/ICreateUserDTO';
import IUsersRepository from '../interfaces/repositories/IUsersRepository';

import User from '../entities/User';

class UsersRepository implements IUsersRepository {
  private ormRepository: Repository<User>;

  constructor() {
    this.ormRepository = getRepository(User);
  }

  public async findByUserName(username: string): Promise<User | undefined> {
    const user = await this.ormRepository.findOne({ where: { username } });

    return user;
  }

  public async create(data: ICreateUserDTO): Promise<User> {
    const user = this.ormRepository.create(data);

    await this.save(user);

    return user;
  }

  public async save(user: User): Promise<User> {
    return this.ormRepository.save(user);
  }
}

export default UsersRepository;
