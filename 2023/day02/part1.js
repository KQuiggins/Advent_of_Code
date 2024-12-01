// Refactor of part 1 to remove .forEach, rename getGameNumber, make isPossibleGame use early return

// Read input file
const fs = require('fs');
const fileData = fs.readFileSync('./input1.txt','utf8');
const lines = fileData.split('\n');
console.log(lines);

// Get number
function getNumber(gamepart) {
    return parseInt(gamepart.match(/\d+/g));
}

// Is possible game
function isPossibleGame(countspart) {
    const draws = countspart.split(';');
    for (const val of draws) {
        let redBalls = 0, greenBalls = 0, blueBalls = 0;
        const balls = val.split(',');
        for (const ballVal of balls) {
            if(ballVal.includes("red")) redBalls += getNumber(ballVal);
            else if(ballVal.includes("green")) greenBalls += getNumber(ballVal);
            else if(ballVal.includes("blue")) blueBalls += getNumber(ballVal);
        };
        // Check for bust
        if(redBalls>12 || greenBalls>13 || blueBalls>14) return false;
    };
    // No busts
    return true;
}

// Iterate lines
let sum = 0;
for(const line of lines) {
    const splitColon = line.split(':');
    let gameval = getNumber(splitColon[0]);
    if(isPossibleGame(splitColon[1])) sum += gameval;
};


console.log("Game Values:",sum);