// App.js
const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello, Central Perk!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
