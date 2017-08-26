

var fs = require('fs');
fs.readFile('testa.txt', function(err, data) {
    if(err) {
        console.error(err);
    } else{
        console.log(data);
    }
});

