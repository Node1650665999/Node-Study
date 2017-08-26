

    /*
    *   异步
    * */
    var fs = require("fs");

    fs.readFile('test.txt', function (err, data) {
        if (err) return console.error(err);
        console.log(data.toString());
    });

    console.log("程序执行结束!");  //先输出

    /*
    *   同步
    * */
    var fs = require("fs");

    var data = fs.readFileSync('test.txt');

    console.log(data.toString());
    console.log("程序执行结束!");   //按顺序输出
