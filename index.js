const express = require('express');

const server = express();

//npx kill-port 9000
//npx gitignore node
//npx eslint --init

server.get('/', (req, res) => {
    res.end('<h1>Helloooo world</h1')
})

server.listen(9000, () => {
    console.log('server running on port 9000');
})