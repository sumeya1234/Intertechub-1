const express = require('express');
const router = express.Router();
const bookController = require('../Controllers/book.controller');

router.get('/books', bookController.getBooks);
router.get('/books/:id', bookController.getBookById);
router.post('/books', bookController.createBook);
router.put('/books/:id', bookController.updateBook);
router.delete('/books/:id', bookController.deleteBook);
router.get('/books/recommendations', bookController.recommendBook);

module.exports = router;
