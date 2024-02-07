import { Repository } from 'typeorm';
import { AppDataSource } from '../../data-source';
import { Contact } from '../../entities/contacts.entities';
import {
  TContactResponse,
  TContactUpdateRequest,
} from '../../interfaces/contacts.interface';
import { contactSchema } from '../../schemas/contacts.schema';
import { AppError } from '../../errors/appError';

const userUpdatingService = async (
  contactData: TContactUpdateRequest,
  contactId: number,
  userId: number
): Promise<TContactResponse> => {
  const contactRepo: Repository<Contact> = AppDataSource.getRepository(Contact);

  const oldData = await contactRepo.findOneBy({
    id: contactId,
  });

  const findContact = await contactRepo.find({
    where: { id: contactId },
    relations: ['user'],
  });

  if (findContact![0].user.id !== userId) {
    throw new AppError("Você não tem permissão para realizar esta ação", 409);
  }

  const contact: Contact = contactRepo.create({
    ...oldData,
    ...contactData,
  });

  await contactRepo.save(contact);

  return contactSchema.parse(contact);
};

export default userUpdatingService;
