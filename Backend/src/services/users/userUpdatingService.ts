import { Repository } from 'typeorm';
import { AppDataSource } from '../../data-source';
import { User } from '../../entities/user.entities';
import {
  TUserResponse,
  TUserUpdateRequest,
} from '../../interfaces/user.interface';
import { userSchemaResponse } from '../../schemas/user.schema';

const userUpdatingService = async (
  userData: TUserUpdateRequest,
  id: number
): Promise<TUserResponse> => {
  const userRepository: Repository<User> = AppDataSource.getRepository(User);

  const oldData = await userRepository.findOneBy({
    id: id,
  });

  const user: User = userRepository.create({
    ...oldData,
    ...userData,
  });

  await userRepository.save(user);

  return userSchemaResponse.parse(user);
};

export default userUpdatingService;
