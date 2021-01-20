import { Router } from 'express';

import OilController from '../controllers/OilController';

import ensureAuthenticate from '../../Users/middlewares/ensureAuthenticated';

const oilsRouter = Router();
const oilController = new OilController();

oilsRouter.post('/', ensureAuthenticate, oilController.create);
oilsRouter.get('/', ensureAuthenticate, oilController.index);

export default oilsRouter;
