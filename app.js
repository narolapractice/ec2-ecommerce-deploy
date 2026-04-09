// app.js
require('dotenv').config();
const express = require('express');
const path = require('path');
const app = express();

const port = process.env.PORT || 3000;

// Serve static files from repo root
app.use(express.static(path.join(__dirname)));

// Root route
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html')); // index.html in root
});

app.listen(port, '0.0.0.0', () => {
  console.log(`Server running on port ${port}`);
});
