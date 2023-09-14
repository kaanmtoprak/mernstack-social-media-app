import {Router}  from 'express';

import auth from './auth/index.js';
import post from './post/index.js';
import user from './user/index.js';


const router = Router();

router.use('/auth', auth);
router.use('/post', post);
router.use('/user', user);


export default router;

