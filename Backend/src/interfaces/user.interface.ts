import { z } from 'zod';
import { DeepPartial } from 'typeorm';
import {
  userSchema,
  userSchemaRequest,
  userSchemaResponse,
  userSchemaMultiple,
  userSchemaCompleteResponse,
  userSchemaCompleteResMultiple,
} from '../schemas/user.schema';

type TUser = z.infer<typeof userSchema> & { creationDate: string };
type TUserRequest = z.infer<typeof userSchemaRequest>;
type TUserResponse = z.infer<typeof userSchemaResponse>;
type TUserResponseMultiple = z.infer<typeof userSchemaMultiple>;
type TUserUpdateRequest = DeepPartial<TUserRequest>;
type TUserResComplete = z.infer<typeof userSchemaCompleteResponse>;
type TUserResponseCompleteMultiple = z.infer<
  typeof userSchemaCompleteResMultiple
>;

export {
  TUser,
  TUserRequest,
  TUserResponse,
  TUserUpdateRequest,
  TUserResponseMultiple,
  TUserResComplete,
  TUserResponseCompleteMultiple,
};