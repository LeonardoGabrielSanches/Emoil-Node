import FakeUsersRepository from '../repositories/fakes/FakeUsersRepository';

import CreateUserService from './CreateUserService';

let createUserService: CreateUserService;
let fakeUsersRepository: FakeUsersRepository;

describe('CreateUserService', () => {
  beforeEach(() => {
    fakeUsersRepository = new FakeUsersRepository();
    createUserService = new CreateUserService(fakeUsersRepository);
  });

  it('should be able to create a new user', async () => {
    const user = await createUserService.execute({
      username: 'user.name',
      password: '123456',
    });

    expect(user).toHaveProperty('id');
  });

  it('should not be able to create a new user with the same username', async () => {
    await createUserService.execute({
      username: 'user.name',
      password: '123456',
    });

    await expect(
      createUserService.execute({ username: 'user.name', password: '123456' }),
    ).rejects.toBeInstanceOf(Error);
  });
});
