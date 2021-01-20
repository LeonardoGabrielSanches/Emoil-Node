import { Router } from 'express';

import customersRoutes from '../../../modules/Customers/routes/customers.routes';

import usersRoutes from '../../../modules/Users/routes/users.routes';

import oilsRoutes from '../../../modules/Oil/routes/oils.routes';

import sessionsRoutes from '../../../modules/Users/routes/sessions.routes';

import oilChangeRoutes from '../../../modules/OilChange/routes/oilChange.routes';

const routes = Router();

routes.use('/customers', customersRoutes);
routes.use('/users', usersRoutes);
routes.use('/oils', oilsRoutes);
routes.use('/sessions', sessionsRoutes);
routes.use('/change', oilChangeRoutes);

export default routes;
