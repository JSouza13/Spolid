import express from 'express';
import routes from './routes';

<<<<<<< HEAD
import './database';

=======
>>>>>>> 08809b37e52b752b243070c633390f854c3c1c41
class App {
  constructor() {
    this.server = express();

    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.server.use(express.json());
  }

  routes() {
    this.server.use(routes);
  }
}

export default new App().server;
