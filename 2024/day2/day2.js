const fs = require('fs');
const path = require('path');


const data = fs.readFileSync(path.join(__dirname, 'input.txt'), 'utf8');

const reports = data.trim().split('\n');

function checkSafety(levels) {
    let isIncreasing = null;

    for (let i = 0; i < levels.length - 1; i++) {
        const difference = levels[i + 1] - levels[i];

        
        if (Math.abs(difference) < 1 || Math.abs(difference) > 3) {
            return 'Unsafe';
        }

       
        if (isIncreasing === null) {
            isIncreasing = difference > 0;
        } else if (
            (isIncreasing && difference <= 0) || // Breaks increasing trend
            (!isIncreasing && difference >= 0)   // Breaks decreasing trend
        ) {
            return 'Unsafe';
        }
    }

    return 'Safe';
}


const results = reports.map(report => {
    const levels = report.split(' ').map(Number); // Convert the line to an array of numbers
    return checkSafety(levels); // Check if the report is safe
});

const safeCount = results.filter(result => result === 'Safe').length;


reports.forEach((report, index) => {
    console.log(`${report}: ${results[index]}`);
});

console.log(`Total Safe Reports: ${safeCount}`);
