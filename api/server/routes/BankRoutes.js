'use strict'

import { Router } from 'express';
import BankController from '../controllers/BankController';

const router = Router();



router.get('/bank', BankController.getBanksDetails);
router.get('/bank/branches', BankController.getBankBranches);


export default router;