import express from "express";
import cors from "cors";
import bodyParser from "body-parser";

import routes from "./routes";

class App {
  public express: express.Application;

  public constructor() {
    this.express = express();

    this.middlewares();
    this.route();
  }

  private middlewares() {
    this.express.use(express.json());
    this.express.use(cors());
    this.express.use(bodyParser.urlencoded({ extended: false }));
  }

  private route() {
    this.express.use(routes);
  }
}

export default new App().express;
