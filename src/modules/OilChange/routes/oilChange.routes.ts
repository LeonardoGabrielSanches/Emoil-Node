import { Router } from 'express';
import { celebrate, Segments, Joi } from 'celebrate';

import OilChangeController from '../controllers/OilChangeController';

import ensureAuthenticated from '../../Users/middlewares/ensureAuthenticated';

const oilChangeRouter = Router();
const oilChangeController = new OilChangeController();

oilChangeRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      customer_id: Joi.string().uuid().required(),
      oil_id: Joi.string().uuid().required(),
    },
  }),
  ensureAuthenticated,
  oilChangeController.create,
);

export default oilChangeRouter;
