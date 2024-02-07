import { AppDataSource } from '../../data-source';
import { Contact } from '../../entities/contacts.entities';
import { User } from '../../entities/user.entities';
import { AppError } from '../../errors/appError';
import {
  TContactRequest,
  TContactResponse,
} from '../../interfaces/contacts.interface';
import { contactSchema } from '../../schemas/contacts.schema';

const contactCreationService = async (
  userData: TContactRequest,
  id: number
): Promise<TContactResponse> => {
  const contactRepo = AppDataSource.getRepository(Contact);
  const userRepo = AppDataSource.getRepository(User);

  const user = await userRepo.findOne({
    where: { id },
    relations: ['contacts'],
  });

  if (!user) {
    throw new AppError('Usuário não encontrado', 404);
  }

  const contactExists = user.contacts.some((contact) => {
    return contact.email === userData.email;
  });

  if (contactExists) {
    throw new AppError('Contato já em uso', 409);
  }

  const contact = contactRepo.create({ ...userData, user });
  await contactRepo.save(contact);

  return contactSchema.parse(contact);
};

export default contactCreationService;