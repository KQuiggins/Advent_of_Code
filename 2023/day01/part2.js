const { log, error } = require('console');
const fs = require('fs');




const replaceWords = (line) => {
    const numberWordKey = {
        'one': '1', 'two': '2', 'three': '3', 'four': '4',
        'five': '5', 'six': '6', 'seven': '7', 'eight': '8', 'nine': '9'
    };

    for (let word in numberWordKey) {
        let regex = new RegExp(word, 'g');
        line = line.replace(regex, numberWordKey[word]);
    }
    return line;
};

const calculate = (lines) => {
    let sum = 0;
    let str = lines.split('\n');

    str.forEach(line => {
        line = line.trim();

        if (line.length === 0) {
            return; // Skip empty lines
        }

        line = replaceWords(line); // Replace words in each line

        let firstDigit = null;
        let secondDigit = null;

        // Find the first digit
        for (let i = 0; i < line.length; i++) {
            if (!isNaN(parseInt(line[i], 10))) {
                firstDigit = line[i];
                break;
            }
        }

        // Find the second digit by looping backwards
        for (let i = line.length - 1; i >= 0; i--) {
            if (!isNaN(parseInt(line[i], 10))) {
                secondDigit = line[i];
                break;
            }
        }

        if (firstDigit !== null && secondDigit !== null) {
            sum += parseInt(firstDigit) + parseInt(secondDigit);
        }
    });

    return sum;
    
}



const processFile = (err, data) => {
    
    fs.readFile('./input.txt', 'utf-8', (err, data) => {
        let answer;
        
        if (err) {
            error('Error reading the file:', err);
            return;
        
        };

        const lines = data.split('\n');
        let sum = 0;

        for (let line of lines) {
            
            line = replaceWords(line);
            log(line);

            answer = calculate(line);
            sum += answer;
            log('Total Sum:', answer);

        }

        

    });
    
};

processFile();
