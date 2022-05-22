import { Request, Response } from "express";

import { cepServices } from "../services/cepServices";

class cepController {
  public async cep(req: Request, res: Response) {
    try {
      const { cep } = req.query;

      const services = new cepServices();

      const execute = await services.viaCep(cep);

      return res.status(200).json(execute);
    } catch (err) {
      return res.status(400).json({ msg: `Erro no servidor ${err}` });
    }
  }
}

export default new cepController();
