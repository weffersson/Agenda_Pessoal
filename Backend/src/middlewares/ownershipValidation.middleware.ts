import { Request, Response, NextFunction } from 'express';
import { AppDataSource } from '../data-source';
import { User } from '../entities/user.entities';
import { AppError } from '../errors/appError';

const ownershipValidation = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const userRepository = AppDataSource.getRepository(User);

  const userId: number = Number(res.locals.userId);

  const findUser: User | null = await userRepository.findOneBy({ id: userId });

  if (!findUser) {
    throw new AppError('Usuário não encontrado', 404);
  }

  if (Number(req.params.id) !== findUser.id) {
    throw new AppError("Você não tem permissão para realizar esta ação", 401);
  }

  return next();
};

export { ownershipValidation };
