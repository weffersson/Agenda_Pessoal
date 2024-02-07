import { z } from 'zod';

const schema = z.object({
  name: z.string().nonempty('O nome é necessário'),
  phone: z
    .string()
    .nonempty('Telefone é necessário')
    .regex(/^\d+$/, 'Telefone deve conter apenas números'),
  email: z.string().email('E-mail não é válido').nonempty('E-mail é necessário'),
});

type CreateData = z.infer<typeof schema>;

export type { CreateData };
export { schema };
