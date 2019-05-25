const testFolder = './ETFs/';
const fs = require('fs'), readline = require('readline');;

fs.readdir(testFolder, function(err, files) {

    for (var i=0;i<files.length;i++) {
        var file=files[i];
        console.log(testFolder+file);
        readFile(testFolder+file);
    }

    // files.forEach(function(file) {
    //     console.log(testFolder+file);
    //     readFile(testFolder+file);
    // });
});


function readFile(file) {
    var rd = readline.createInterface({
        input: fs.createReadStream(file),
        output: process.stdout,
        console: false
    });
    rd.on('line',function(line){
        console.log(line) //or parse line
    });
}