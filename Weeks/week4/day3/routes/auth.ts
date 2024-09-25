import express, { Router } from 'express';
import {addBook, deleteBook, getBooks, login ,register, updateBook} from '../controllers/authController.js'

const router:Router = express.Router();

router.route('/register').post(register);
router.route('/login').post(login);
router.route('/Books/:id').get(getBooks);
router.route('/Books').post(addBook);
router.route('/Books/:bookId').delete(deleteBook).put(updateBook);

export default router;