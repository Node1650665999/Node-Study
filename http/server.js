

var http = require('http');
http.createServer(function (req, res) {

    res.writeHeader(301, {'Location' : 'http://www.baidu.com'});
    // res.writeHead(200,  {'Content-Type': 'text/plain'});
    // console.log(req.url);
    // res.end('lello ');
    res.end();
}).listen(8081, '127.0.0.1');





