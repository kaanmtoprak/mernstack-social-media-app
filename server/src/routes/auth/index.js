import {Router}  from 'express';
import {Login,Register, Verified} from '../../controllers/auth/index.js'
import { verifyAccessToken } from '../../helpers/jwt.js';


const router = Router();

router.post('/login', Login);
router.post('/register', Register);
router.post('/verified',verifyAccessToken,Verified)

export default router;