import { Router } from 'express';
const router = Router();
import kanbanRouter from './kanbanRouter';
import todoRouter from './todoRouter';
import userRouter from './userRouter';

router.use('/kanban', kanbanRouter);
router.use('/todo', todoRouter);
router.use('/user', userRouter);

export default router;