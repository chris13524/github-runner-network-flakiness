const WebSocket = require('ws');

const url = process.env.WEBSOCKET_URL || 'wss://example.com';
const ws = new WebSocket(url);

console.log(`Connecting to WebSocket at ${url}`);

ws.on('open', () => {
  console.log('WebSocket connection opened');
});

ws.on('close', () => {
  const closeTime = new Date().toISOString();
  console.log(`WebSocket connection closed at ${closeTime}`);
  process.exit(0); // Exit after logging the close time
});

ws.on('error', (err) => {
  console.error(`Error: ${err.message}`);
  process.exit(1); // Exit with error status
});
