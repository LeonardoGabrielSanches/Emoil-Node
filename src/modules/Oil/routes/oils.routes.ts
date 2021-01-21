import { Router } from 'express';
import { celebrate, Segments, Joi } from 'celebrate';

import OilController from '../controllers/OilController';

import ensureAuthenticate from '../../Users/middlewares/ensureAuthenticated';

const oilsRouter = Router();
const oilController = new OilController();

oilsRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      name: Joi.string().required(),
      expirationInMonth: Joi.number().required(),
    },
  }),
  ensureAuthenticate,
  oilController.create,
);
oilsRouter.get('/', ensureAuthenticate, oilController.index);

export default oilsRouter;
