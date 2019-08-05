// ==> Importing dependency
import express from 'express';

// ==> Creating new router instance
const Router = express.Router();

// ==> Importing all routes
import Routes from './Routes';

// ==> Importing all middlewares
import Middlewares from './Middlewares';

// ==> Injecting middlewares and Routes
Router.use(Middlewares.cors);
Router.use('/', Routes.root);
Router.use('/payables', Routes.payables);
Router.use('/transactions', Routes.transactions);

// ==> Exporting module
export default Router;
