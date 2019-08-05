// ==> Instanciate new router
import express from 'express';
const Router = express.Router();

// ==> Importing controllers
import Controller from '../../Controllers/transactions.controller';

// ==> Building routes
Router.post('/', Controller.create);

export default Router;
