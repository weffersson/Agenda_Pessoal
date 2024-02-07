import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import 'dotenv/config';

const tokenValidation = (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({
      message: 'permissão insuficiente: token inválido',
    });
  }

  const splitToken = token.split(' ')[1];

  jwt.verify(
    splitToken,
    process.env.SECRET_KEY!,
    (error: any, decoded: any) => {
      if (error) {
        return res.status(401).json({
          message: 'token inválido',
        });
      }

      res.locals.userId = decoded.sub;

      return next();
    }
  );
};

export { tokenValidation };
