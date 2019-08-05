// ==> Instanciate new router
import express from 'express';
const Router = express.Router();

// ==> Importing controllers
import Controller from '../../Controllers/payables.controller';

// ==> Building routes
Router.get('/balance', Controller.getBalance);
Router.get('/statement/:sinceDate?', Controller.getStatement);

export default Router;
