let greeting = "Hello World"

("string").split("")

var stringArray = [ 's', 't', 'r', 'i', 'n', 'g' ]
stringArray.join('')


var numberArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

function getRandomInt(array) {
    let min = Math.ceil(0);
    let max = Math.floor(array.length);
    let i = Math.floor(Math.random() * (max - min)) + min;
    return array[i];
    }


function getTwoRandomInt(array) {
    let min = Math.ceil(0);
    let max = Math.floor(array.length);
    let firstNum = Math.floor(Math.random() * (max - min)) + min;
    let secondNum = Math.floor(Math.random() * (max - min)) + min;

    var temp = array[firstNum];
    array[firstNum] = array[secondNum];
    array[secondNum] = temp;

    return array;
}

let candies = new Map();

let candies = new Map([
    ['red', 'raspberry'],
    ['green', 'kiwi'],
    ['yellow', 'banana'],
    ['blue', 'blueberry'],
    ['purple', 'grape']
    ]);


for (let [color, flavor] of candies){
    console.log(`${flavor} flavor is colored ${color}`);
}