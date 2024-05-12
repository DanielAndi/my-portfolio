const express = require('express');
const router = express.Router();

// Define your API endpoints here (e.g., fetch all projects)
router.get('/projects', (req, res) => {
  // Implement logic to fetch projects data
  res.json([/* Sample Project Data */]);
});

module.exports = router;
