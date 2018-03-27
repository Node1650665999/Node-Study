process.on('uncaughtException', function(err) {
    console.log('Caught exception: ' + err);
});

setTimeout(function() {
    console.log('本行依然执行');
}, 500);

// 下面的表达式抛出错误
nonexistentFunc();