import { AppDataSource } from '../../data-source';
import { User } from '../../entities/user.entities';
import { TUserRequest, TUserResponse } from '../../interfaces/user.interface';
import { userSchemaResponse } from '../../schemas/user.schema';

const userCreationService = async (
  userData: TUserRequest
): Promise<TUserResponse> => {
  const { email, name, password, phone } = userData;
  const userRepo = AppDataSource.getRepository(User);

  const user = userRepo.create({
    name,
    email,
    phone,
    password,
  });

  await userRepo.save(user);

  return userSchemaResponse.parse(user);
};

export default userCreationService;
