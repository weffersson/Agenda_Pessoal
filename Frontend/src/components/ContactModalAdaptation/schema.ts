import { z } from 'zod';

const schema = z.object({
  name: z.string().nonempty('O nome é necessário'),
  phone: z
    .string()
    .nonempty('Telefone é necessário')
    .regex(/^\d+$/, 'Telefone deve conter apenas o número'),
  email: z.string().email('E-mail inválido').nonempty('E-Mail'),
});

type UpdateData = z.infer<typeof schema>;

export { schema };

export type { UpdateData };
