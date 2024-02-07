import { z } from 'zod';
import { contactSchemaResponse } from './contacts.schema';

const userSchema = z.object({
  id: z.number(),
  name: z.string(),
  email: z.string().email(),
  phone: z.string(),
  password: z.string(),
  createdAt: z.string(),
  updatedAt: z.string(),
});

const userSchemaRequest = userSchema.omit({
  id: true,
  createdAt: true,
  updatedAt: true,
});

const userSchemaResponse = userSchema.omit({
  password: true,
});

const userSchemaMultiple = z.array(userSchemaResponse);

const userSchemaUpdate = userSchema
  .omit({
    id: true,
  })
  .partial();

const userSchemaCompleteResponse = z.object({
  id: z.number(),
  name: z.string(),
  email: z.string().email(),
  phone: z.string(),
  contacts: z.array(contactSchemaResponse),
  createdAt: z.string(),
  updatedAt: z.string(),
});

const userSchemaCompleteResMultiple = z.array(userSchemaCompleteResponse);

export {
  userSchema,
  userSchemaRequest,
  userSchemaResponse,
  userSchemaMultiple,
  userSchemaUpdate,
  userSchemaCompleteResponse,
  userSchemaCompleteResMultiple,
};
