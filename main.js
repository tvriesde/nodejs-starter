// Import required modules
const express = require('express');
const bodyParser = require('body-parser');

// Create an instance of express
const app = express();

// Set up middleware
app.use(bodyParser.json());

// Define routes
app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.post('/api/users', (req, res) => {
  const user = req.body;
  // Save user to database
  res.send(user);
});

// Start the server
app.listen(3000, () => {
  console.log('Server started on port 3000');
});