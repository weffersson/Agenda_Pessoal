import { z } from 'zod';

const schema = z.object({
  email: z.string().nonempty().email('E-mail inválido'),
  password: z.string().nonempty('Senha requerida'),
});

type DataLogin = z.infer<typeof schema>;

export { schema };

export type { DataLogin };
