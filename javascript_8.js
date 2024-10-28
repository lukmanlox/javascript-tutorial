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
let option;
let accounts = [];

while (true) {
    
    option = prompt("Select Your Option:\n1) Create bank account\n2) View bank accounts\nEnter 'exit' to stop");

    if (option === 'exit') {
        console.log("Exiting...");
        break;
    }

    switch (option) {
        case '1': 
            let account = {};
            account.name = prompt('Enter your name: ');
            account.fatherName = prompt('Enter your father\'s name: ');

            let minimumDeposit = 2000;
            let deposit = parseFloat(prompt('Enter the First Deposit (minimum balance of 2000): '));

            if (deposit >= minimumDeposit) {
                account.amount = deposit;
                accounts.push(account);
                console.log('Account created successfully');
            } else {
                console.log('Minimum deposit amount is 2000!!!');
            }
            break;

        case '2': 
            console.log('Accounts:');
            console.log('---------------------------');
            if (accounts.length === 0) {
                console.log('No accounts found.');
            } else {
                accounts.forEach((account, index) => {
                    console.log(`Account ${index + 1}`);
                    console.log('User Name:', account.name);
                    console.log('Father\'s Name:', account.fatherName);
                    console.log('Deposit:', account.amount);
                    console.log('------------------------');
                });
            }
            break;

        default: 
            console.log('Invalid option! Please select 1 or 2.');
            break;
    }
}
