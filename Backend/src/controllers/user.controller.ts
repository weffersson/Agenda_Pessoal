import { Request, Response } from 'express';
import userCreationService from '../services/users/userCreationService';
import {
  userListingService,
  userListingByIdService,
} from '../services/users/userListingService';
import userUpdatingService from '../services/users/userUpdatingService';
import userDeletionService from '../services/users/userDeletionService';
import { TUserUpdateRequest, TUserRequest } from '../interfaces/user.interface';

const userCreationController = async (req: Request, res: Response) => {
  const { email, name, password, phone }: TUserRequest = req.body;
  const newUser = await userCreationService({ email, name, password, phone });

  return res.status(201).json(newUser);
};

const userListingController = async (req: Request, res: Response) => {
  const users = await userListingService();

  return res.json(users);
};

const userListingByIdController = async (req: Request, res: Response) => {
  const userId: number = Number(req.params.id);
  const user = await userListingByIdService(userId);

  return res.json(user);
};

const userUpdatingController = async (req: Request, res: Response) => {
  const userId: number = Number(req.params.id);
  const updatedValues: TUserUpdateRequest = req.body;
  const updateUser = await userUpdatingService(updatedValues, userId);
  return res.json(updateUser);
};

const userDeletionController = async (req: Request, res: Response) => {
  const UserId = Number(req.params.id);
  await userDeletionService(UserId);
  res.status(204).send();
};

export {
  userCreationController,
  userListingController,
  userUpdatingController,
  userDeletionController,
  userListingByIdController,
};
