import express from 'express';
import { getNewsIndex,getWorldNews } from '../controller/newsController.js';

const router = express.Router();

router.route('/').get(getNewsIndex);

router.route('/world').get(getWorldNews);

export default router;