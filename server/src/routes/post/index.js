import {Router}  from 'express';
import { createPost } from '../../controllers/post/index.js';


const router = Router();

router.post('/add', createPost);

export default router;