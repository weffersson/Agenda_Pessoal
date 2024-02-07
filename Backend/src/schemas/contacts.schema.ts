import { z } from 'zod';

const contactSchema = z.object({
  id: z.number(),
  name: z.string().max(200),
  email: z.string().email().max(45),
  phone: z.string().max(12),
  createdAt: z.string(),
  updatedAt: z.string(),
});

const contactSchemaRequest = contactSchema.omit({
  id: true,
  user: true,
  createdAt: true,
  updatedAt: true,
});

const contactSchemaMultiple = z.array(contactSchema);

const contactSchemaUpdate = contactSchema
  .omit({
    id: true,
    user: true,
  })
  .partial();

const contactSchemaResponse = z.object({
  id: z.number(),
  name: z.string(),
  email: z.string().email(),
  phone: z.string(),
  createdAt: z.string(),
  updatedAt: z.string(),
});

export {
  contactSchema,
  contactSchemaRequest,
  contactSchemaMultiple,
  contactSchemaUpdate,
  contactSchemaResponse,
};
