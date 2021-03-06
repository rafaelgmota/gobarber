import { Router } from 'express';
import appointmentsRouter from './appointments.routes';
import UsersRouter from './users.routes';
import SessionsRouter from './sessions.routes';

const routes = Router();

routes.use('/appointments', appointmentsRouter);
routes.use('/users', UsersRouter);
routes.use('/sessions', SessionsRouter);

export default routes;
