const express = require('express');
const path = require('path');
const fs = require('fs');
const util = require('util');

const apiRouter = require('./public/routes/apiRouter');

const PORT = process.env.PORT || 3001

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(express.static('public'));

// GET route for homepage
app.get('/', (req,res) => res.sendFile(path.join(__dirname, './public/index.html')));

// GET route for notes page
app.get('/notes', (req, res) => res.sendFile(path.join(__dirname, './public/notes.html')));

app.use('/api/notes', apiRouter);

app.listen(PORT, () => console.log(`Listening at http://localhost:${PORT}`));