import { Router } from "express";

import Hellocontroller from "./controllers/Hellocontroller";
import UserController from "./controllers/UsersController";
import RepositoriesController from "./controllers/RepositoriesController";

const routes = new Router();

routes.get("/hello", Hellocontroller.index);

// RESTFULL
routes.get("/users", UserController.index);
routes.get("/users/:id", UserController.show);
routes.post("/users", UserController.create);
routes.put("/users/:id", UserController.update);
routes.delete("/users/:id", UserController.destroy);

routes.get('/users/:user_id/repositores', RepositoriesController.index);
routes.post('/users/:user_id/repositores', RepositoriesController.create);
routes.delete('/users/:user_id/repositores', RepositoriesController.destroy);

export default routes;
