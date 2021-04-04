const fs = require('fs');
const http = require('http');
// const url = require('url');

////////////////////////////
// FILES

//Blocking - Syncronous
// const textIn = fs.readFileSync('./txt/input.txt', 'utf-8');
// console.log('Reading file...')

// const textOut = `This is what we know about avocado: ${textIn}.
// Created on ${Date.now()}.`

// fs.writeFileSync('./txt/output.txt', textOut);
// console.log('File written!');

//Non-Blocking - Asyncronous
// fs.readFile('./txt/start.txt', 'utf-8', (err, data) => {
//     console.log(data);
// });
// console.log('Will read file...');

//Non-Blocking - Async within Async
// fs.readFile('./txt/start.txt', 'utf-8', (err, data1) => {
//     fs.readFile(`./txt/${data1}.txt`, 'utf-8', (err, data2) => {
//         err ? console.error(err) : console.log(data2)
//     });
// });
// console.log('Will read file right after I read the first file...');

//Non-Blocking - Async reading two files and writing them inside a file.
// fs.readFile('./txt/start.txt', 'utf-8', (err, data1) => {
//     if (err) return console.log('ERROR 💥');
//     fs.readFile(`./txt/${data1}.txt`, 'utf-8', (err, data2) => {
//         fs.readFile('./txt/append.txt', 'utf-8', (err, data3) => {
//             fs.writeFile('./txt/final.txt', `${data2}\n${data3}`, 'utf-8', (err) => {
//                 console.log('Your file is written! 📝');
//             })
//         });
//     });
// });
// console.log('Reading files and writing...');

////////////////////////////
// SERVER

const server = http.createServer((req, res) => {
    const pathName = req.url
    
    if (pathName === '/' || pathName === '/overview') return res.end('Welcome to overview!');
    if (pathName === '/product') return res.end('Welcome to product!');
    //ASYNC READING EVERY TIME WE DO REQUEST
    if (pathName === '/api') {
        return (
            fs.readFile(`${__dirname}/dev-data/data.json`, 'utf-8', (err, data) => {
                if (err) return console.error(err);
                res.writeHead(200, {
                    'Content-type': 'application/json'
                });
                return res.end(data);
            })
        );
    }
    res.writeHead(404, {
        'Content-type': 'text/html'
    });
    res.end('<h1>Page not found!</h1>');
});

server.listen(8000, '127.0.0.1', () => {
    console.log('Listening on port: 8000');
});