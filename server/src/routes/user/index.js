import {Router}  from 'express';
import { controlUser } from '../../controllers/user/index.js';


const router = Router();

router.post('/control', controlUser);

export default router;