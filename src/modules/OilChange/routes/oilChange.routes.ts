import { Router } from 'express';

import OilChangeController from '../controllers/OilChangeController';

import ensureAuthenticated from '../../Users/middlewares/ensureAuthenticated';

const oilChangeRouter = Router();
const oilChangeController = new OilChangeController();

oilChangeRouter.post('/', ensureAuthenticated, oilChangeController.create);

export default oilChangeRouter;
