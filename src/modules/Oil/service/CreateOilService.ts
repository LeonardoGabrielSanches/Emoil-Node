import { injectable, inject } from 'tsyringe';
import * as Yup from 'yup';
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
    const schema = Yup.object().shape({
      name: Yup.string().required('O óleo deve possuir um nome.'),
      expirationInMonth: Yup.number()
        .required()
        .moreThan(0, 'A expiração do oléo deve ser maior que zero.'),
    });

    await schema.validate({ name, expirationInMonth }, { abortEarly: false });

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
