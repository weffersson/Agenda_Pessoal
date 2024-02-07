import { z } from 'zod';
import { loginSchema } from '../schemas/login.schema';

type TLoginRequest = z.infer<typeof loginSchema>;

export { TLoginRequest };
