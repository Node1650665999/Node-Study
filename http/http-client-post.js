
/*
* 发送POST请求
*
* */

var http = require('http');
var querystring = require('querystring');

//请求字段
var contents = querystring.stringify({ //http_build_query
    top_id:17,
    page:1
});
console.log(contents);

//请求头信息
var options = {
    host:'dev.api.buyer.2bao.org',
    path:'/v1.1/index',
    // port: 80,
    method:'POST',
    headers:{
        'Content-Type':'application/x-www-form-urlendcoded',
        'Content-Length':contents.length
    }
};

//接受响应
var req = http.request(options, function(res){
    res.setEncoding('utf8');
    res.on('data',function(data){
        console.log("data:",data);
    });

});

req.write(contents);
req.end();