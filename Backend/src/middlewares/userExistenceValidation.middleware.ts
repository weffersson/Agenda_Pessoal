import { Request, Response, NextFunction } from 'express';
import { AppDataSource } from '../data-source';
import { User } from '../entities/user.entities';
import { AppError } from '../errors/appError';

const userExistenceValidation = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const userRepo = AppDataSource.getRepository(User);

  const userEmail: string = req.body.email;

  const findUser = await userRepo.findOne({
    where: {
      email: userEmail,
    },
  });

  if (findUser) {
    throw new AppError('Usuário já existe', 409);
  }

  return next();
};

export { userExistenceValidation };
