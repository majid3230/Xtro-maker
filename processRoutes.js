import { Router } from 'express';
import { processRequest } from '../controllers/processController.js';
import { validateProcessRequest } from '../middleware/validate.js';

const router = Router();

router.post('/', validateProcessRequest, processRequest);

export default router;
