var readlineSync = require('readline-sync');
var fs = require('fs');
var recursively = require('recursively');

var stairsNumb = readlineSync.question('Ввести количество ступенек: ');
// now we are wainting for input
var buffer = fs.readFileSync("data.txt"); // read 2 buffer
var stairPrice  = buffer.toString('utf8'); // buffer 2 string 
// convert data from string to integer
var stairPriceArr = Array.from(stairPrice.split('\n')); // from string 2 array of strings
// now we convert array of strings 2 array of integers
var stairPriceArrInt = stairPriceArr.map(function (x) {  
    return parseInt(x, 10); 
});

recursively(stairPriceArrInt, function (item, index, collection) {
    if (index === 0) {
        return stairPriceArrInt[0];
    } else if (index === 1) {
        return stairPriceArrInt[1];
    } else {
        return Math.min(collection[index - 2], collection[index - 1])+ collection[index];
    }
});          

	
console.log ((stairPriceArrInt))
console.log ((stairPriceArrInt[stairPriceArrInt.length-1]))

