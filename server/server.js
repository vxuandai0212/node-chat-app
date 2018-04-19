const path = require('path');
const express = require('express');

const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;

var app = express();
app.use(express.static(publicPath));

app.get("/about", (req, res) => {
    res.render(index.html);
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});