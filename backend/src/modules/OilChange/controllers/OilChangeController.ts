import { Request, Response } from 'express';
import { container } from 'tsyringe';
import CreateOilChangeService from '../service/CreateOilChangeService';

export default class OilsController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { customer_id, oil_id } = request.body;

    const createOilChange = container.resolve(CreateOilChangeService);

    const oilChange = await createOilChange.execute({ customer_id, oil_id });

    return response.json(oilChange);
  }
}
