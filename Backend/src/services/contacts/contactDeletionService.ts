import { Repository } from 'typeorm';
import { Contact } from '../../entities/contacts.entities';
import { AppDataSource } from '../../data-source';
import { AppError } from '../../errors/appError';

const contactDeletionService = async (
  contactId: number,
  userId: number
): Promise<void> => {
  const contactRepo: Repository<Contact> = AppDataSource.getRepository(Contact);

  const contact = await contactRepo.find({
    where: { id: contactId },
    relations: ['user'],
  });

  if (contact![0].user.id !== userId) {
    throw new AppError(
      "Você não tem permissão ou não está autorizado a realizar tal tarefa",
      409
    );
  }

  await contactRepo.remove(contact!);
};

export default contactDeletionService;
