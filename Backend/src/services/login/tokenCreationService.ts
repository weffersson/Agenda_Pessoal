import { compare } from 'bcryptjs';
import { AppDataSource } from '../../data-source';
import { User } from '../../entities/user.entities';
import { AppError } from '../../errors/appError';
import { TLoginRequest } from '../../interfaces/login.interface';
import jwt from 'jsonwebtoken';
import 'dotenv/config';

const tokenCreationService = async ({
  email,
  password,
}: TLoginRequest): Promise<string> => {
  const usersRepository = AppDataSource.getRepository(User);

  const user = await usersRepository.findOne({
    where: {
      email,
    },
  });

  if (!user) {
    throw new AppError('Usuário não encontrado', 403);
  }

  const passwordConfirmation = await compare(password, user.password);

  if (!passwordConfirmation) {
    throw new AppError('Usuário não encontrado', 403);
  }

  const token = jwt.sign({ email: user.email }, process.env.SECRET_KEY!, {
    expiresIn: '24h',
    subject: String(user.id),
  });

  return token;
};

export { tokenCreationService };