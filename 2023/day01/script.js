const { log } = require('console');
const fs = require('fs');

fs.readFile('./input.txt', 'utf-8', (err, data) => {
    if (err) {
        console.error('Error reading the file:', err);
        return;
    }

    const lines = data.split('\n');
    let sum = 0;

    lines.forEach(line => {
        line = line.trim();

        if (line.length === 0) {
            return; // Skip empty lines
        }

        let firstDigitIndex = -1;
        let firstDigit = null;
        let secondDigit = null;

        // Find the first digit
        for (let i = 0; i < line.length; i++) {
            if (!isNaN(parseInt(line[i], 10))) {
                firstDigit = line[i];
                firstDigitIndex = i;
                break;
            }
        }

        // Find the second digit by looping backwards
        for (let i = line.length - 1; i > firstDigitIndex; i--) {
            if (!isNaN(parseInt(line[i], 10))) {
                secondDigit = line[i];
                break;
            }
        }

        console.log('Line:', line, 'First Digit:', firstDigit, 'Second Digit:', secondDigit);
    });

    console.log('Total Sum:', sum);
});
