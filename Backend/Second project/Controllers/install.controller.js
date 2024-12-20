const dbConnection = require('../Database/db.config'); 

async function installTables(req, res) {
  try {
    // SQL command to create the `books` table
    const createBooksTableQuery = `
      CREATE TABLE IF NOT EXISTS books (
        id INT AUTO_INCREMENT PRIMARY KEY,
        title VARCHAR(255) NOT NULL,
        author VARCHAR(255) NOT NULL,
        isbn VARCHAR(50) NOT NULL UNIQUE,
        publishedYear INT,
        isFavorite BOOLEAN DEFAULT FALSE
      );
    `;

    // Execute the SQL command
    const [result] = await dbConnection.query(createBooksTableQuery);

    // Validate the result if necessary
    console.log('Table creation result:', result);

    res.status(200).json({ message: 'Database tables installed successfully!' });
  } catch (error) {
    console.error('Error installing tables:', error.message);
    res.status(500).json({ error: 'Failed to install database tables.' });
  }
}

module.exports = { installTables };
