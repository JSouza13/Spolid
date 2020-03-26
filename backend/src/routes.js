import { Router } from 'express';

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';

const routes = new Router();

routes.post('/users', UserController.store);
routes.post('/Sessions', SessionController.store);

const routes = new Router();

routes.get('/', (req, res) => res.json({ message: 'Hello SPOLID hi' }));

export default routes;
