import { Router } from "express";
import auth from "../src/middlewares/auth";

import Hellocontroller from "./controllers/Hellocontroller";
import SessionsController from "./controllers/SessionsController";
import UserController from "./controllers/UsersController";
import RepositoriesController from "./controllers/RepositoriesController";

const routes = new Router();

routes.post("/sessions", SessionsController.create);

routes.get("/hello", Hellocontroller.index);

routes.use(auth);

// RESTFULL
routes.get("/users", UserController.index);
routes.get("/users/:id", UserController.show);
routes.post("/users", UserController.create);
routes.put("/users/:id", UserController.update);
routes.delete("/users/:id", UserController.destroy);

routes.get("/users/:user_id/repositories", RepositoriesController.index);
routes.post("/users/:user_id/repositories", RepositoriesController.create);
routes.delete("/users/:user_id/repositories", RepositoriesController.destroy);

export default routes;
