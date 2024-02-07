import { z } from 'zod';

const schema = z.object({
  name: z.string().nonempty('O nome é necessário'),
  phone: z
    .string()
    .nonempty('É necessário telefone')
    .regex(/^\d+$/, 'Telefone deve conter apenas o número'),
  email: z.string().nonempty().email('E-mail inválido'),
  password: z.string().optional(),
});

type UpdateData = z.infer<typeof schema>;

export { schema };

export type { UpdateData };
