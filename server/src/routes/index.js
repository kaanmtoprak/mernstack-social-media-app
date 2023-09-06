import {Router}  from 'express';

import auth from './auth/index.js';
import todo from './todo/index.js';


const router = Router();

router.use('/auth', auth);
router.use('/todo', todo);


export default router;

