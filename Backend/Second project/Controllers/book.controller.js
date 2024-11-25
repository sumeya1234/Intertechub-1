const Book = require('../Models/book');
const validateBook = require('../middleware/validation');

// Get all books
async function getBooks (req, res){
  try {
    const books = await Book.find();
    res.status(200).json(books);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get a specific book by ID
async function getBookById(req, res) {
  try {
    const book = await Book.findById(req.params.id);
    if (!book) return res.status(404).json({ error: 'Book not found' });
    res.status(200).json(book);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Add a new book
async function createBook (req, res) {
  const { error } = validateBook(req.body);
  if (error) return res.status(400).json({ error: error.details[0].message });

  try {
    const book = new Book(req.body);
    await book.save();
    res.status(201).json(book);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update a book by ID
async function updateBook (req, res){
  const { error } = validateBook(req.body);
  if (error) return res.status(400).json({ error: error.details[0].message });

  try {
    const book = await Book.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!book) return res.status(404).json({ error: 'Book not found' });
    res.status(200).json(book);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete a book by ID
async function deleteBook(req, res){
  try {
    const book = await Book.findByIdAndDelete(req.params.id);
    if (!book) return res.status(404).json({ error: 'Book not found' });
    res.status(200).json({ message: 'Book deleted' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Recommend a random book
async function recommendBook(req, res){
  try {
    const books = await Book.find();
    if (books.length === 0) return res.status(404).json({ error: 'No books available' });

    const randomBook = books[Math.floor(Math.random() * books.length)];
    res.status(200).json(randomBook);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports={
  getBooks,
  getBook,
  createBook,
  updateBook,
  deleteBook,
  recommendBook
}