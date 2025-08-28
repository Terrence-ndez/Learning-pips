    const http = require('http');
        const host = 'localhost';
    const port = 3000;
        const server = http.createServer((req, res) => {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Hello from the server!');
    });
        server.listen(port, host, () => {
        console.log(`Server running at http://${host}:${port}/`);
    });