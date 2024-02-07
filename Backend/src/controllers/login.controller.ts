import { Request, Response } from 'express';
import { tokenCreationService } from '../services/login/tokenCreationService';

const tokenCreationController = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  const token = await tokenCreationService({ email, password });

  return res.json({ token });
};

export { tokenCreationController };
