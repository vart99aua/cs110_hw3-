    const http = require('http');

    const httpServer = http.createServer(function(req, res) {

        if (req.url === '/Nohomework') {
            res.writeHead(200, {'Content-Type': 'text/plain'});
            res.end('Yep');
        }
        else if(req.url === '/fun'){
            res.writeHead(404, {'Content-Type' : 'text/plain'});
            res.end("Why not!");
        }
        else if(req.url === '/AUA') {
            res.writeHead(200, {'Content-Type': 'text/plain'});
            res.end('Hey...');
        }
        else if (req.url === '/Noquiz') {
            res.writeHead(200, {'Content-Type': 'text/plain'});
            res.end('YAAAY');
        }
        else if (req.url === '/CS') {
            res.writeHead(200, {'Content-Type': 'text/plain'});
            res.end('Interesting');
        }
        else if (req.url === '/Thanks') {
            res.writeHead(200, {'Content-Type': 'text/plain'});
            res.end('My pleasure');
        }
    });

    httpServer.listen(3411);



