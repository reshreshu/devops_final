const http = require('http');
const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  res.end('Server running on port ' + port);
});

server.listen(port, '0.0.0.0', () => {
    console.log(`✅ Server is running on port ${port}`);
});

