const http = require('http');

const server = http.createServer(function (request, response) {

    html = '';

    if(request.url == '/'){
        html = '/';
    }else if (request.url == '/livros') {
        html = '/livros';
    }
    
    response.end(html);
});

server.listen(3000);

