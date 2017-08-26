


/*
*
* 发送GET请求
*
* */

var http = require('http');
var qs = require('querystring');

//请求字段
var data = {
    a: 123,
    time: new Date().getTime()
};
var content = qs.stringify(data);

//请求头
var options = {
    hostname: 'dev.api.buyer.2bao.org',
    // port: 80,
    path: '/Test/get_min?' + content,
    method: 'GET'
};

//
var req = http.request(options, function (res) {
    res.setEncoding('utf8');
    res.on('data', function (chunk) {
        console.log(chunk);
    });
});

req.on('error', function (e) {
    console.log(e.message);
});

req.end();