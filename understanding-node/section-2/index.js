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

//Only runs once when the program is compiled. We can reuse the data now without reading it.
const data = fs.readFileSync(`${__dirname}/dev-data/data.json`, 'utf-8');
const dataObj = JSON.parse(data);

//templates
const templateOverview = fs.readFileSync(`${__dirname}/templates/overview.html`, 'utf-8');
const templateProduct = fs.readFileSync(`${__dirname}/templates/product.html`, 'utf-8');
const templateCard = fs.readFileSync(`${__dirname}/templates/card.html`, 'utf-8');

const replaceTemplate = (card, template) => {
    let output = template.replace(/{%PRODUCT_NAME%}/g, card.productName);
    output = output.replace(/{%IMAGE%}/g, card.image);
    output = output.replace(/{%FROM%}/g, card.from);
    output = output.replace(/{%NUTRIENTS%}/g, card.nutrients);
    output = output.replace(/{%QUANTITY%}/g, card.quantity);
    output = output.replace(/{%PRICE%}/g, card.price);
    output = output.replace(/{%DESCRIPTION%}/g, card.description);
    output = output.replace(/{%ID%}/g, card.id);
    if (!card.organic) output = output.replace(/{%NOT_ORGANIC%}/g, 'not-organic');

    return output;
}

const server = http.createServer((req, res) => {
    const pathName = req.url
    
    if (pathName === '/' || pathName === '/overview') {
        res.writeHead(200, {
            'Content-type': 'text/html'
        });
        const cardsHtml = dataObj.map(el => replaceTemplate(el, templateCard)).join('');
        const output = templateOverview.replace('{%PRODUCT_CARDS%}', cardsHtml);
        return res.end(output);
    }
    if (pathName === '/product') return res.end('Welcome to product!');
    if (pathName === '/api') {
        //Async reading everytime we request
        // return (
        //     fs.readFile(`${__dirname}/dev-data/data.json`, 'utf-8', (err, data) => {
        //         if (err) return console.error(err);
        //         res.writeHead(200, {
        //             'Content-type': 'application/json'
        //         });
        //         return res.end(data);
        //     })
        // );
        //Sync sending data on request
        res.writeHead(200, {
            'Content-type': 'application/json'
        });
        return res.end(data);
    }
    res.writeHead(404, {
        'Content-type': 'text/html'
    });
    res.end('<h1>Page not found!</h1>');
});

server.listen(8000, '127.0.0.1', () => {
    console.log('Listening on port: 8000');
});