import { Router } from 'express';
import kanbanController from '../controllers/kanbanController'
const router = Router();

router.post('/');
router.get('/');
router.get('/:id');

export default router;