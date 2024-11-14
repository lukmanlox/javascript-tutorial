const fs = require('fs')
let count = 0
const prompt = msg => {
    fs.writeSync(1, String(msg));
    let s = '', buf = Buffer.alloc(1), i = 0, numberOfNewLine = 0, stdinBuffer = Buffer.alloc(1), inc = 0;
    buf.fill(0);
    while ((buf[0] - 10 && buf[0] - 13)) {

        s += buf, fs.readSync(0, buf, 0, 1, 0);
        if (buf[0] - 10 === 0 || buf[0] - 13 === 0) {
            i++;
            // console.log('first',i)
        }
    } 
    fs.readSync(0, stdinBuffer, 0, 1, null);
    count++;
    return s.slice(1).replace(/^\n/, '');
};
let a = 12;

let output = "";
for (let i = a; i > 0; i--) {
    let stars = '';
    
    for (let j = 0; j < a - i; j++) {
        stars += ' ';
    }
   
    for (let l = 0; l < (2 * i - 1); l++) {
        stars += '*';
    }
    
    output += stars + '\n';
}

console.log(output);
