import {Router}  from 'express';
import { controlUser,getUser,followUser } from '../../controllers/user/index.js';


const router = Router();

router.post('/control', controlUser);
router.get('/get-single-user', getUser);
router.post('/follow-user', followUser);

export default router;