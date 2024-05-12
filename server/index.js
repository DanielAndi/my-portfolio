const express = require('express');
const path = require('path');
const routes = require('./routes');

const app = express();

// Serve static files from the React app
app.use(express.static(path.join(__dirname, '../client/build')));

// API routes
app.use('/api', routes);

// Serve PDF files
app.use('/public', express.static(path.join(__dirname, 'public')));

// The "catchall" handler: for any request that doesn't match, send back the React app
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
