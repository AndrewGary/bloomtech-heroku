require('dotenv').config();
const PORT = process.env.PORT || 9000;

const express = require('express');

const server = express();

//npx kill-port 9000
//npx gitignore node
//npx eslint --init

server.get('/', (req, res) => {
    res.end('<h1>Helloooo world</h1')
})

server.listen(PORT, () => {
    console.log(`server running on port ${PORT}`);
})