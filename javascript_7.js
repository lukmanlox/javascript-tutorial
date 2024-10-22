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
while (true) {
    console.log("Options:\n1) Addition\n2) Subtraction\n3) Division");
    let choice = prompt("Choose any option:");

    if (choice !== "1" && choice !== "2" && choice !== "3") {
        console.log("Please enter a valid choice.");
        continue;
    }

    let a, b, c; 
    while (true) {
        a = Number(prompt("Enter the first number:"));
        if (isNaN(a)) {
            console.log("Please enter a valid number.");
            continue;
        } else {
            break;
        }
    }

   
    while (true) {
        b = Number(prompt("Enter the second number:"));
        if (isNaN(b)) {
            console.log("Please enter a valid number.");
            continue;
        } else {
            break;
        }
    }

   
    while (true) {
        c = Number(prompt("Enter the third number:"));
        if (isNaN(c)) {
            console.log("Please enter a valid number.");
            continue;
        } else {
            break;
        }
    }

   
    let result;
    if (choice === "1") {
        result = a + b + c;
    } else if (choice === "2") {
        result = a - b - c;
    } else if (choice === "3") {
        if (b === 0 || c === 0) {
            console.log("Division by zero is not allowed.");
            continue;
        }
        result = a / b / c;
    }

    console.log("Result: " + result);
    
}
