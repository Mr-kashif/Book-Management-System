import express from 'express';

const router = express.Router();

import { getBooks, createBook, updateBook, deleteBook } from '../controllers/Book.js';


router.get('/', getBooks);
router.post('/', createBook);
router.put('/:id', updateBook);
router.delete('/:id', deleteBook);



export default router;