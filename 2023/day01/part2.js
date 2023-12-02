const fs = require('fs');

let total = 0;
const digits = {
    one: 1, two: 2, three: 3, four: 4,
    five: 5, six: 6, seven: 7, eight: 8, nine: 9
};

const processLine = (line) => {
    let i = 0;
    let currNum = 0;

    while (i < line.length) {
        let dfound = false;

        for (let ds in digits) {
            if (line.substring(i).startsWith(ds)) {
                i += ds.length;
                dfound = true;
                if (currNum === 0) {
                    currNum = digits[ds] * 10;
                } else {
                    currNum = 10 * Math.floor(currNum / 10);
                    currNum += digits[ds];
                }
                break;
            }
        }

        if (!dfound && !isNaN(parseInt(line[i], 10))) {
            const d = parseInt(line[i], 10);
            i++;
            if (currNum === 0) {
                currNum = d * 10;
            } else {
                currNum = 10 * Math.floor(currNum / 10);
                currNum += d;
            }
        } else if (!dfound) {
            i++;
        }
    }

    if (currNum % 10 === 0 && currNum !== 0) {
        currNum += Math.floor(currNum / 10);
    }

    if (currNum > 99) {
        console.error(`Invalid number in line: ${line}`);
        return 0;
    }

    return currNum;
};

const fileName = './input.txt';
try {
    const data = fs.readFileSync(fileName, 'utf8');
    const lines = data.split('\n');
    lines.forEach(line => {
        total += processLine(line);
    });
    console.log(total);
} catch (err) {
    console.error("Error reading file:", err.message);
}
