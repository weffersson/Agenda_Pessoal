import { Repository } from 'typeorm';
import { User } from '../../entities/user.entities';
import { AppDataSource } from '../../data-source';
import { AppError } from '../../errors/appError';

const userDeletionService = async (userId: number): Promise<void> => {
  const userRepository: Repository<User> = AppDataSource.getRepository(User);
  const user: User | null = await userRepository.findOneBy({ id: userId });

  if (!user) {
    throw new AppError('Usuário não encontrado', 404);
  }

  await userRepository.remove(user);
};

export default userDeletionService;
