const Router = require('express');
const router = new Router();
const kanbanRouter = require('./kanbanRouter');
const todoRouter = require('./todoRouter');
const userRouter = require('./userRouter');

router.use('/kanban', kanbanRouter);
router.use('/todo', todoRouter);
router.use('/user', userRouter);

module.exports = router;