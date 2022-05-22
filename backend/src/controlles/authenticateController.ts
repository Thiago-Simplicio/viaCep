import { Request, Response } from "express";

import { authenticateService } from "../services/authenticateServices";

class authenticateController {
  async token(req: Request, res: Response) {
    try {
      const { name } = req.query;

      const service = new authenticateService();

      const execute = await service.generateToken(name);

      return res.status(200).json(execute);
    } catch (err) {
      return res.status(400).json({ msg: `Erro no servidor ${err}` });
    }
  }
}

export default new authenticateController();
