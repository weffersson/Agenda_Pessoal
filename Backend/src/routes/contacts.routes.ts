import { Router } from 'express';
import { tokenValidation } from '../middlewares/tokenValidation.middleware';
import { contactValidation } from '../middlewares/contactValidation.middleware';
import { dataValidation } from '../middlewares/dataValidation.middleware';
import {
  contactSchemaRequest,
  contactSchemaUpdate,
} from '../schemas/contacts.schema';
import {
  contactCreationController,
  contactListingController,
  contactListingByIdController,
  contactUpdatingController,
  contactDeletionController,
} from '../controllers/contacts.controller';

const contactsRoutes = Router();

contactsRoutes.use(tokenValidation);

contactsRoutes.post(
  '',
  dataValidation(contactSchemaRequest),
  contactCreationController
);

contactsRoutes.get('', contactListingController);

contactsRoutes.get('/:id', contactValidation, contactListingByIdController);

contactsRoutes.patch(
  '/:id',
  dataValidation(contactSchemaUpdate),
  contactValidation,
  contactUpdatingController
);

contactsRoutes.delete('/:id', contactValidation, contactDeletionController);

export { contactsRoutes };
