const http = require('http');
const net = require('net');

const GITHUB_IPS = ['140.82.121.4', '140.82.112.3', '140.82.114.4'];

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('GitHub Tunnel Running\n');
});

server.on('connect', (req, clientSocket, head) => {
  const [host, port] = req.url.split(':');
  const targetPort = parseInt(port || '443', 10);
  let targetHost = host;
  if (host.includes('github.com')) {
    targetHost = GITHUB_IPS[0];
  }

  const serverSocket = net.connect(targetPort, targetHost, () => {
    clientSocket.write('HTTP/1.1 200 Connection Established\r\n\r\n');
    if (head && head.length) {
      serverSocket.write(head);
    }
    serverSocket.pipe(clientSocket);
    clientSocket.pipe(serverSocket);
  });

  serverSocket.on('error', (err) => {
    console.error('Socket error to target:', err.message);
    try { clientSocket.destroy(); } catch(e) {}
  });

  clientSocket.on('error', (err) => {
    try { serverSocket.destroy(); } catch(e) {}
  });
});

server.listen(8999, '127.0.0.1', () => {
  console.log('GitHub Tunnel Proxy listening on 127.0.0.1:8999');
});
