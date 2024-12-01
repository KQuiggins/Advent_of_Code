const fs = require('fs');
const path = require('path');


const data = fs.readFileSync(path.join(__dirname, 'list.txt'), 'utf8');
const rows = data.trim().split('\n');


let leftColumn = [];
let rightColumn = [];

rows.forEach(row => {
    const [left, right] = row.trim().split(/\s+/).map(Number);
    leftColumn.push(left);
    rightColumn.push(right);
});

// console.log(leftColumn);
// console.log(rightColumn);

leftColumn = leftColumn.sort((a, b) => a - b);
rightColumn = rightColumn.sort((a, b) => a - b);

// console.log(leftColumn);
// console.log(rightColumn);

let totalDistance = 0;
for (let i = 0; i < leftColumn.length; i++) {
    totalDistance += Math.abs(leftColumn[i] - rightColumn[i]);
}

console.log(totalDistance);