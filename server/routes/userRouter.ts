import {Router} from 'express';
const router = Router();

import userController from '../controllers/userController';
//@ts-ignore
import authNiddleware from '../middleware/authNiddleware'

router.post('/registration', userController.registration);
router.post('/login', userController.login);
router.get('/auth', authNiddleware, userController.check);

export default router;