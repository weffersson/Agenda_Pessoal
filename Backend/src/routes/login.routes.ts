import { Router } from 'express';
import { tokenCreationController } from '../controllers/login.controller';

const loginRoutes = Router();

loginRoutes.post('', tokenCreationController);

export { loginRoutes };
