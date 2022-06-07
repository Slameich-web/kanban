import {Router} from 'express';
import userController from '../controllers/userController';
import authNiddleware from '../middleware/authNiddleware';

const router = Router();
router.post('/registration', userController.registration);
router.post('/login', userController.login);
router.get('/auth', authNiddleware, userController.check);

export default router;