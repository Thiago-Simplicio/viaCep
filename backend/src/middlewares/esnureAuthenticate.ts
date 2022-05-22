import { Request, Response, NextFunction } from "express";

import { verify } from "jsonwebtoken";
const mysecret = "@mysecret";

export const ensureAuthentication = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const token = req.headers.authorization;

  verify(token, mysecret, (err, decoded) => {
    if (err) {
      return res.status(401).json({ msg: `Não authenticado` }).end();
    }

    next();
  });
};
