import express from 'express';
import { getUser, importAllUsers } from '../controllers/general.js';
const router = express.Router();

router.get('/user/:id', getUser);
router.post('/import-users', importAllUsers)

export default router