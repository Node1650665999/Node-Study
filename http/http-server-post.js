

var http = require('http');
var querystring = require('querystring');

/*
* post表单
*
* */
var postHTML =
    '<html><head><meta charset="utf-8"><title>菜鸟教程 Node.js 实例</title></head>' +
    '<body>' +
    '<form method="post">' +
    '网站名： <input name="name"><br>' +
    '网站 URL： <input name="url"><br>' +
    '<input type="submit">' +
    '</form>' +
    '</body></html>';


/*
*   处理post请求
*
* */
http.createServer(function (req, res) {

    /*
    * nodejs为了使整个过程非阻塞优化上传性能，会将post的数据分块(chunk)进行传输，
    * 期间每接收一个数据块就回触发stream流的data事件(http模块部署了stream流接口)，
    * 所以我们可以通过监听data事件来获取post传输的数据
    * */
    var body = "";
    req.on('data', function (chunk) {
        body += chunk;
        console.log(chunk);
    });
    /*
    * 如果表单的类型不是enctype="multipart/form-data"，那么说明post的过来的原始数据
    * 格式为x-www-urlencode(类似name=tcl&age=26这种格式)，这和我们使用php://input
    * 获取的原生post数据一致，而原生数据的格式也就解释了当我们用php做post请求时为什么会
    * 使用http_build_query来操作参数数组原因
    * */
    req.on('end', function () {
        var data = querystring.parse(body);  //解析http_build_query的字段为对象
        res.writeHead(200, {'Content-Type': 'text/html; charset=utf8'});
        if(data) {
            res.write(data);
        } else {
            res.write(postHTML);
        }
        res.end();
    });
}).listen(3000);