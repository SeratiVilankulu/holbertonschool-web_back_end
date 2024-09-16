const express = require('express');

// Create an Express app
const app = express();

// Define the port number
const port = 1245;

// Handle the root URL ('/')
app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

// Start the server on port 1245
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

// Export the app
module.exports = app;
