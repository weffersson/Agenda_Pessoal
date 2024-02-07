import { z } from 'zod';

const schema = z
  .object({
    name: z.string().nonempty('O nome é necessário'),
    phone: z
      .string()
      .nonempty('É necessário telefone')
      .regex(/^\d+$/, 'O telefone deve conter apenas o número'),
    email: z.string().email('E-mail inválido').nonempty('E-mail é necessário'),
    password: z
      .string()
      .nonempty('Senha requerida')
      .min(6, 'A senha deve ter pelo menos 6 caracteres')
      .regex(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
        'A senha deve conter pelo menos uma letra maiúscula, uma letra minúscula, um número e um caractere especial'
      ),
    confirmPassword: z.string().nonempty('Por favor confirme sua senha'),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'As senhas não coincidem',
    path: ['confirmPassword'],
  });

type RegisterData = z.infer<typeof schema>;

export { schema };

export type { RegisterData };
