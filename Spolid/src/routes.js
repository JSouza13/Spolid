import { Router } from 'express';

<<<<<<< HEAD
import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';

const routes = new Router();

routes.post('/users', UserController.store);
routes.post('/Sessions', SessionController.store);
=======
const routes = new Router();

routes.get('/', (req, res) => res.json({ message: 'Hello SPOLID hi' }));
>>>>>>> 08809b37e52b752b243070c633390f854c3c1c41

export default routes;
