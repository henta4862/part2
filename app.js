const express = require('express');
const app = express();
const port = 3001;


// Endpoint 1: Text Response
app.get('/textmessage', (req, res) => {
    res.send('This is a simple text response.');
  });

// Endpoint 3: Text Response
app.get('/htmlmessage', (req, res) => {
    res.send('This is a simple text response.');
  });

// Endpoint 2: JSON Response
app.get('/jsonmessage', (req, res) => {
  const jsonData = {
    message: 'This is a JSON response.',
    timestamp: new Date()
  };

  // Endpoint 4: JSON Response
app.get('/info', (req, res) => {
  const jsonData = {
    message: 'This is a JSON response.',
    timestamp: new Date()
  };


  res.json(jsonData);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

// Start the server
app.listen(port, () => {
    console.log(`Hello, visitor! You are visiting at ${new Date}`);
  });