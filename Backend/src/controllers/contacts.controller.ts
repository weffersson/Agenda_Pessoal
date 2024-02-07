import { Request, Response } from 'express';
import contactCreationService from '../services/contacts/contactCreationService';
import { TContactUpdateRequest } from '../interfaces/contacts.interface';
import {
  contactListingService,
  contactListingByIdService,
} from '../services/contacts/contactListingService';
import userUpdatingService from '../services/contacts/userUpdatingService';
import contactDeletionService from '../services/contacts/contactDeletionService';

const contactCreationController = async (req: Request, res: Response) => {
  const id: number = Number(res.locals.userId);
  const newContact = await contactCreationService(req.body, id);

  return res.status(201).json(newContact);
};

const contactListingController = async (req: Request, res: Response) => {
  const contacts = await contactListingService();

  return res.json(contacts);
};

const contactListingByIdController = async (req: Request, res: Response) => {
  const contactId: number = Number(req.params.id);
  const contact = await contactListingByIdService(contactId);

  return res.json(contact);
};

const contactUpdatingController = async (req: Request, res: Response) => {
  const contactId: number = Number(req.params.id);
  const userId: number = Number(res.locals.userId);
  const updatedValues: TContactUpdateRequest = req.body;
  const updateContact = await userUpdatingService(
    updatedValues,
    contactId,
    userId
  );
  return res.json(updateContact);
};

const contactDeletionController = async (req: Request, res: Response) => {
  const ContactId: number = Number(req.params.id);
  const userId: number = Number(res.locals.userId);
  await contactDeletionService(ContactId, userId);
  res.status(204).send();
};

export {
  contactCreationController,
  contactListingController,
  contactListingByIdController,
  contactDeletionController,
  contactUpdatingController,
};
