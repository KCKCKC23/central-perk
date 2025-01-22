const express = require('express');
const path = require('path');
const app = express();

// Serve static files from the 'src' or 'build' folder
app.use(express.static(path.join(__dirname, 'D:\Central Perk\central-perk\src'))); // Change 'src' to 'build' if React

// Handle all other routes (for SPA like React)
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'D:\Central Perk\central-perk\src', 'index.js')); // Change 'src' to 'build' if React
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});