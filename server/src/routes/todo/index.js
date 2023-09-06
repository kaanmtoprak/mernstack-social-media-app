import {Router}  from 'express';
import { createTodo } from '../../controllers/todo/index.js';


const router = Router();

router.post('/add', createTodo);

export default router;