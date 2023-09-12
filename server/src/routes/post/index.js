import {Router}  from 'express';
import { createPost,getAllPosts } from '../../controllers/post/index.js';


const router = Router();

router.post('/add', createPost);
router.post('/all', getAllPosts);

export default router;