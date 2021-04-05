const fs = require('fs');
const crypto = require('crypto');

const start = Date.now();

setTimeout(() => console.log('timer 1 finished'), 0);
setImmediate(() => console.log('Immediate 1 finished'));

fs.readFile('test-file.txt', () => {
    console.log('I/O finished');
    console.log('------------------------');

    setTimeout(() => console.log('timer 2 finished'));
    setTimeout(() => console.log('timer 2 with 3 sec finished'), 3000);
    setImmediate(() => console.log('immediate 2 finished'));

    process.nextTick(() => console.log('process nextTick finished'));
});

crypto.pbkdf2('password', 'salt', 100000, 1024, 'sha512', () => {
    console.log(Date.now() - start + ' Password encrypted!');
});
crypto.pbkdf2('password', 'salt', 100000, 1024, 'sha512', () => {
    console.log(Date.now() - start + ' Password encrypted!');
});

console.log('Hello from top level code');