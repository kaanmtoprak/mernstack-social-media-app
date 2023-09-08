import {Router}  from 'express';

import auth from './auth/index.js';
import post from './post/index.js';


const router = Router();

router.use('/auth', auth);
router.use('/post', post);


export default router;

