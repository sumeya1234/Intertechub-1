const express = require("express");
const app = express();
const port = 5000;

const nameRoutes = require("./Routes/name.routes");
const hobbyRoutes = require("./Routes/hobby.routes");
const dreamRoutes = require("./Routes/dream.routes");

// Route to the home page
app.get('/', (req, res) => {
  res.send('Welcome to the home page');
});
// app.use(express.json());

app.use(nameRoutes);
app.use(hobbyRoutes);
app.use(dreamRoutes);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

module.exports = app;