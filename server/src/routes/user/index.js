import {Router}  from 'express';
import { controlUser,getUser } from '../../controllers/user/index.js';


const router = Router();

router.post('/control', controlUser);
router.get('/get-single-user', getUser);

export default router;