// Create web server
    // Load the express library
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const fs = require('fs');
const app = express();

// Load the data
let comments = require('./comments.json');

// Add headers
app.use(cors());
app.use(bodyParser.json());

// REST endpoints
app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/comments', (req, res) => {
    res.json(comments);
});

app.post('/comments', (req, res) => {
    comments.push(req.body);
    fs.writeFile('./comments.json', JSON.stringify(comments), () => {
        res.json(comments);
    });
});

// Start the server
app.listen(3000, () => {
    console.log('Server started on port 3000');
});