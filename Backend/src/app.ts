import cors from 'cors';
import express from 'express';
import 'express-async-errors';
import 'reflect-metadata';
import { handleAppError } from './errors/handleAppError';
import { usersRoutes } from './routes/users.routes';
import { loginRoutes } from './routes/login.routes';
import { contactsRoutes } from './routes/contacts.routes';

const app = express();

app.use(cors({}));
app.use(express.json());
app.use('/users', usersRoutes);
app.use('/login', loginRoutes);
app.use('/contacts', contactsRoutes);
app.use(handleAppError);

export default app;
