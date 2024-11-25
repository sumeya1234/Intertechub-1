const dbConnection = require("../Database/db.config");
const validateBook = require("../Middleware/validate");

// Get all books
const getBooks = async (req, res) => {
  try {
    const [books] = await dbConnection.query("SELECT * FROM books");
    res.status(200).json(books);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get a specific book by ID
const getBookById = async (req, res) => {
  try {
    const [book] = await dbConnection.query("SELECT * FROM books WHERE id = ?", [req.params.id]);
    if (book.length === 0) return res.status(404).json({ error: "Book not found" });
    res.status(200).json(book[0]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Add a new book
const createBook = async (req, res) => {
  const { error } = validateBook(req.body);
  if (error) return res.status(400).json({ error: error.details[0].message });

  try {
    const { title, author, isbn, publishedYear, isFavorite } = req.body;
    const [result] = await dbConnection
      .query(
        "INSERT INTO books (title, author, isbn, publishedYear, isFavorite) VALUES (?, ?, ?, ?, ?)",
        [title, author, isbn, publishedYear || null, isFavorite || false]
      );
    res.status(201).json({ id: result.insertId, ...req.body });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update a book by ID
const updateBook = async (req, res) => {
  const { error } = validateBook(req.body);
  if (error) return res.status(400).json({ error: error.details[0].message });

  try {
    const { title, author, isbn, publishedYear, isFavorite } = req.body;
    const [result] = await dbConnection
      .query(
        "UPDATE books SET title = ?, author = ?, isbn = ?, publishedYear = ?, isFavorite = ? WHERE id = ?",
        [title, author, isbn, publishedYear || null, isFavorite || false, req.params.id]
      );
    if (result.affectedRows === 0) return res.status(404).json({ error: "Book not found" });
    res.status(200).json({ id: req.params.id, ...req.body });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete a book by ID
const deleteBook = async (req, res) => {
  try {
    const [result] = await dbConnection.query("DELETE FROM books WHERE id = ?", [req.params.id]);
    if (result.affectedRows === 0) return res.status(404).json({ error: "Book not found" });
    res.status(200).json({ message: "Book deleted" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


// Export all controller functions
module.exports = {
  getBooks,
  getBookById,
  createBook,
  updateBook,
  deleteBook
};
