import { Request, Response, NextFunction } from 'express';
import { AppDataSource } from '../data-source';
import { User } from '../entities/user.entities';

const userValidation = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const userRepo = AppDataSource.getRepository(User);

  const userId: number = Number(req.params.id);

  const user = await userRepo.findOne({
    where: {
      id: userId,
    },
  });

  if (!user) {
    return res.status(404).json({
      message: 'Usuário não encontrado ou digitado incorretamente',
    });
  }

  return next();
};

export { userValidation };
