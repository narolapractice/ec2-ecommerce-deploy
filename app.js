require('dotenv').config();
const express = require('express');
const path = require('path');

const app = express();

const PORT = process.env.PORT || 3000;
const SITE_NAME = process.env.SITE_NAME || "My Store";

app.use(express.static(path.join(__dirname, 'public')));

app.get('/api/config', (req, res) => {
  res.json({
    siteName: SITE_NAME
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});