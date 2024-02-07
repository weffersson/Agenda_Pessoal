import { z } from 'zod';
import { DeepPartial } from 'typeorm';
import {
  contactSchema,
  contactSchemaRequest,
  contactSchemaMultiple,
  contactSchemaResponse,
} from '../schemas/contacts.schema';

type TContactRequest = z.infer<typeof contactSchemaRequest>;
type TContactResponse = z.infer<typeof contactSchema>;
type TContactResponseMultiple = z.infer<typeof contactSchemaMultiple>;
type TContactUpdateRequest = DeepPartial<TContactRequest>;
type TContactAbsentUser = z.infer<typeof contactSchemaResponse>;

export {
  TContactRequest,
  TContactResponse,
  TContactUpdateRequest,
  TContactResponseMultiple,
  TContactAbsentUser,
};
