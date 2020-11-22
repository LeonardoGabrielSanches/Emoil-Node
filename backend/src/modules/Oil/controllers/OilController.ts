import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { classToClass } from 'class-transformer';
import OilsRepository from '../repositories/OilsRepository';
import CreateOilService from '../service/CreateOilService';

export default class OilsController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { name, expirationInMonth } = request.body;

    const createOil = container.resolve(CreateOilService);

    const oil = await createOil.execute({ name, expirationInMonth });

    return response.json(oil);
  }

  public async index(request: Request, response: Response): Promise<Response> {
    const oilsRepository = container.resolve(OilsRepository);

    const oils = await oilsRepository.findAll();

    if (oils.length <= 0) return response.status(204).send();

    return response.json(classToClass(oils));
  }
}
