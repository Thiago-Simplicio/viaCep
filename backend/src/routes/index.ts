import express, { Request, Response } from "express";

import authenticateController from "../controlles/authenticateController";
import cepController from "../controlles/cepController";

import { ensureAuthentication } from "../middlewares/esnureAuthenticate";

class Routes {
  public express: express.Router;

  public constructor() {
    this.express = express.Router();

    this.routes();
  }

  private routes() {
    this.express.post("/token", authenticateController.token);
    this.express.post("/cep", ensureAuthentication, cepController.cep);
  }
}

export default new Routes().express;
