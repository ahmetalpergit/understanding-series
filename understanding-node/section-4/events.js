const http = require('http');
const EventEmitter = require('events');

class Sale extends EventEmitter {
    constructor() {
        super();
    }
}

const myEmitter = new Sale();

myEmitter.on('newSale', () => console.log('New sale!'));
myEmitter.on('newSale', () => console.log('Customer Name: Ahmet Alper'));
myEmitter.on('newSale', (stock) => console.log(`There's ${stock} items left in stock`));

myEmitter.emit('newSale', 9);

const server = http.createServer();

server.on('request', (req, res) => {
    res.end('request received');
    console.log('request received #1');
});

server.on('request', (req, res) => {
    console.log('request received #2');
});

server.on('close', () => {
    console.log('server shut down');
});

server.listen(8000, '127.0.0.1', () => {
    console.log('Listening on port: 8000...');
});