const fs = require('fs');
const file = '/input.txt';
const data = fs.readFileSync(__dirname + file, 'utf8').toString();
const elfBags = data.split(/\n\n/gi);
const totalCalories = [];
elfBags.forEach((bag, index) => {
    const calories = bag.split(/\n/gi);
    let totalElfCalories = 0;
    calories.forEach(cal => totalElfCalories += parseInt(cal));

    if (!isNaN(totalElfCalories)) {
        totalCalories.push(totalElfCalories);
    }
});
const descCalories = totalCalories.sort((a, b) => b - a);

// part one
console.log(descCalories[0]);
//part two
console.log(descCalories[0] + descCalories[1] + descCalories[2]);

