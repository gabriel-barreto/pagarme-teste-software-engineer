// ==> Instanciate new router
import express from 'express';
const Router = express.Router();

// ==> Importing controllers
import Controller from '../../Controllers/root.controller';

// ==> Building routes
Router.get('/run', Controller.run);

export default Router;
