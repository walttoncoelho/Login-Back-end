import { Router } from "express";

import Hellocontroller from "./controllers/Hellocontroller";

const routes = new Router();

routes.get('/hello', Hellocontroller.index); 

export default routes;