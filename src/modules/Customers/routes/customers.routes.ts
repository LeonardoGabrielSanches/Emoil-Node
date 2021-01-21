import { Router } from 'express';
import { celebrate, Segments, Joi } from 'celebrate';

import ensureAuthenticated from '../../Users/middlewares/ensureAuthenticated';

import CustomersController from '../controllers/CustomersController';

const customersRoute = Router();
const customersController = new CustomersController();

customersRoute.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      name: Joi.string().required(),
      email: Joi.string().email().required(),
    },
  }),
  ensureAuthenticated,
  customersController.create,
);
customersRoute.get('/', ensureAuthenticated, customersController.index);

export default customersRoute;
