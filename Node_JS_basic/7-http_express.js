const express = require('express');
const args = process.argv.slice(2);
const countStudents = require('./3-read_file_async');

const DATABASE = args[0]; // CSV file passed as a command-line argument

const app = express();
const port = 1245;

// Route for '/'
app.get('/', (req, res) => {
  res.setHeader('Content-Type', 'text/plain'); // Ensures plain text response
  res.send('Hello Holberton School!');
});

// Route for '/students'
app.get('/students', async (req, res) => {
  const msg = 'This is the list of our students\n';
  try {
    const students = await countStudents(DATABASE); // Assuming countStudents returns an array
    res.setHeader('Content-Type', 'text/plain');
    res.send(`${msg}${students.join('\n')}`); // Joining array with newlines for readability
  } catch (error) {
    res.setHeader('Content-Type', 'text/plain');
    res.send(`${msg}${error.message}`);
  }
});

// Start server
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

module.exports = app;
