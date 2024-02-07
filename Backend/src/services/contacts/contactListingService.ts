import { Repository } from 'typeorm';
import { Contact } from '../../entities/contacts.entities';
import { AppDataSource } from '../../data-source';
import {
  TContactResponseMultiple,
  TContactResponse,
} from '../../interfaces/contacts.interface';
import {
  contactSchemaMultiple,
  contactSchema,
} from '../../schemas/contacts.schema';
import { AppError } from '../../errors/appError';

const contactListingService = async (): Promise<TContactResponseMultiple> => {
  const contactsRepo: Repository<Contact> =
    AppDataSource.getRepository(Contact);

  const contacts: Array<Contact> = await contactsRepo.find({
    relations: {
      user: true,
    },
  });

  return contactSchemaMultiple.parse(contacts);
};

const contactListingByIdService = async (
  contactId: number
): Promise<TContactResponse> => {
  const contactRepo: Repository<Contact> = AppDataSource.getRepository(Contact);

  const contact: Array<Contact> = await contactRepo.find({
    where: { id: contactId },
    relations: {
      user: true,
    },
  });

  if (!contact[0]) {
    throw new AppError('Contato não encontrado ou digitado incorretamente', 404);
  }

  return contactSchema.parse(contact[0]);
};

export { contactListingService, contactListingByIdService };
