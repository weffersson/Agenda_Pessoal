import { Router } from 'express';
import { userSchemaRequest, userSchemaUpdate } from '../schemas/user.schema';
import {
  userCreationController,
  userListingController,
  userListingByIdController,
  userUpdatingController,
  userDeletionController,
} from '../controllers/user.controller';
import { dataValidation } from '../middlewares/dataValidation.middleware';
import { userValidation } from '../middlewares/userValidation.middleware';
import { userExistenceValidation } from '../middlewares/userExistenceValidation.middleware';
import { tokenValidation } from '../middlewares/tokenValidation.middleware';
import { ownershipValidation } from '../middlewares/ownershipValidation.middleware';

const usersRoutes = Router();

usersRoutes.post(
  '',
  dataValidation(userSchemaRequest),
  userExistenceValidation,
  userCreationController
);

usersRoutes.use(tokenValidation);

usersRoutes.get('', userListingController);

usersRoutes.get('/:id', userValidation, userListingByIdController);

usersRoutes.patch(
  '/:id',
  userValidation,
  dataValidation(userSchemaUpdate),
  ownershipValidation,
  userUpdatingController
);

usersRoutes.delete(
  '/:id',
  userValidation,
  ownershipValidation,
  userDeletionController
);

export { usersRoutes };
