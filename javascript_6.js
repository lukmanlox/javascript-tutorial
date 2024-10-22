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


let integerFirstNum;
let integerSecondNum;


while (true) {
   
    while (true) {
        let firstNumberString = prompt("Enter the first number:");
        integerFirstNum = Number(firstNumberString);

        if (isNaN(integerFirstNum)) {
            console.log("Please enter a valid number.");
            continue; 
        } else {
            break;
        }
    }

   
    while (true) {
        let secondNumberString = prompt("Enter the second number:");
        integerSecondNum = Number(secondNumberString);

        if (isNaN(integerSecondNum)) {
            console.log("Please enter a valid second number.");
            continue; 
        } else {
            break; 
        }
    }

    break; 
}

console.log(`You entered the numbers: ${integerFirstNum} and ${integerSecondNum}`);
