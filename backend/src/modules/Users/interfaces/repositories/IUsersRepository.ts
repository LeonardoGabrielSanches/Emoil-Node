import ICreateUserDTO from '../../dtos/ICreateUserDTO';

import User from '../../entities/User';

export default interface IUsersRepository {
  findByUserName(username: string): Promise<User | undefined>;
  create(data: ICreateUserDTO): Promise<User>;
}
