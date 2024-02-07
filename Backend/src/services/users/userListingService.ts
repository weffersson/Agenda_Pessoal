import { Repository } from 'typeorm';
import { User } from '../../entities/user.entities';
import { AppDataSource } from '../../data-source';
import {
  TUserResponseCompleteMultiple,
  TUserResComplete,
} from '../../interfaces/user.interface';
import {
  userSchemaCompleteResponse,
  userSchemaCompleteResMultiple,
} from '../../schemas/user.schema';

const userListingService = async (): Promise<TUserResponseCompleteMultiple> => {
  const userRepo: Repository<User> = AppDataSource.getRepository(User);
  const users: Array<User> = await userRepo.find({
    relations: ['contacts'],
  });

  return userSchemaCompleteResMultiple.parse(users);
};

const userListingByIdService = async (
  userId: number
): Promise<TUserResComplete> => {
  const usersRepo: Repository<User> = AppDataSource.getRepository(User);

  const user = await usersRepo.find({
    where: { id: userId },
    relations: { contacts: true },
  });

  return userSchemaCompleteResponse.parse(user[0]);
};

export { userListingService, userListingByIdService };
