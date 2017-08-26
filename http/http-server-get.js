
/*
*
*   处理GET请求
*
* */

var http = require('http-server-get');
var fs   = require('fs');
var url  = require('url');

http.createServer( function (req, res) {
    var pathname = url.parse(req.url).pathname;

    // 从文件系统中读取请求的文件内容
    fs.readFile(pathname.substr(1), function (err, data) {
        if (err) {
            console.log(err);
            res.writeHead(404, {'Content-Type': 'text/html'});
        }else{
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(data.toString());
        }
        //发送响应数据
        res.end();
    });
}).listen(8081);
