import { uuid } from 'uuidv4';
import ICreateUserDTO from '../../dtos/ICreateUserDTO';
import IUsersRepository from '../../interfaces/repositories/IUsersRepository';

import User from '../../entities/User';

class FakeUsersRepository implements IUsersRepository {
  private users: User[] = [];

  public async create(data: ICreateUserDTO): Promise<User> {
    const user = new User();

    Object.assign(user, { id: uuid() }, data);

    this.users.push(user);

    return user;
  }

  public async findByUserName(username: string): Promise<User | undefined> {
    const findUser = this.users.find(user => user.username === username);

    return findUser;
  }
}

export default FakeUsersRepository;
