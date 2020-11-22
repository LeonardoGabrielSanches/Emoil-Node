import { sign } from 'jsonwebtoken';
import { injectable, inject } from 'tsyringe';
import { compare } from 'bcryptjs';

import authConfig from '../../../config/authConfig';

import IUsersRepository from '../interfaces/repositories/IUsersRepository';

import User from '../entities/User';

interface IRequest {
  username: string;
  password: string;
}

interface IResponse {
  user: User;
  token: string;
}

@injectable()
class AuthenticateUserService {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
  ) {}

  public async execute({ username, password }: IRequest): Promise<IResponse> {
    const user = await this.usersRepository.findByUserName(username);

    if (!user) throw new Error('Combinação de usuário e senha inválida.');

    const passwordMatched = await compare(password, user.password);

    if (!passwordMatched)
      throw new Error('Combinação de usuário e senha inválida.');

    const { secret, expiresIn } = authConfig.jwt;

    const token = sign({}, secret, {
      subject: user.id,
      expiresIn,
    });

    return {
      user,
      token,
    };
  }
}

export default AuthenticateUserService;
