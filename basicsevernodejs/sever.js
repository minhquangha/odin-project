const { default: axios } = require('axios');
const http = require('node:http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
    let filePath = '';
    const url = req.url;
    if (url === '/') {
        filePath = path.join(__dirname, 'index.html');
    } else if (url === '/about') {
        filePath = path.join(__dirname, 'about.html');
    } else if (url === '/contact') {
        filePath = path.join(__dirname, 'contact-me.html');
    } else {
        filePath = path.join(__dirname, '404.html');
    }

    fs.readFile(filePath, (err, data) => {
        if (err) {
            res.writeHead(500, { 'content-type': 'text/plain' });
            res.end('Error -loading');
        }else{
            res.writeHead(200,{'content-type': 'text/plain'});
            res.end(data);
        }
    });
});

server.listen(8080);
