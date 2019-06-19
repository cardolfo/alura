const express = require('express');

const app = express();

app.listen(3000, function () {
    console.log('Servidor rodando na porta 3000');
})

app.get('/', function (request, response) {
    response.send(`
        <html>
            <head>
                <meta charset="utf-8">
            </head>
            <body>
                <h1> Casa do Código </h1>
            </body> 
        </html>
    `);
});

app.get('/livros', function (request, response) {
    response.send(`
        <html>
            <head>
                <meta charset="utf-8">
            </head>
            <body>
                <h1> Lista de Livros </h1>
            </body> 
        </html>
    `);
});

/*const http = require('http');

const server = http.createServer(function (request, response) {

    html = '';

    if(request.url == '/'){
        html = '/';
    }else if (request.url == '/livros') {
        html = '/livros';
    }

    response.end(html);
});

server.listen(3000);*/