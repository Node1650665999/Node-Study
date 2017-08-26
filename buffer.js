

    /*
    * buffer 实例
    * */
    // demo1
    var str  = 'hello wrold';
    var length = str.length;
    buf = new Buffer(length);
    len = buf.write(str);
    console.log(len, buf.toString());
    // demo2
    var arr  = [10, 20, 30, 40, 50];
    buf = new Buffer(arr);
    console.log(buf.length, buf.toJSON());


    /*
    * 剪切缓冲区
    * */
    var buffer1 = new Buffer('youj');
    var buffer2 = buffer1.slice(0,2);
    console.log(buffer1.toString(),buffer2.toString());