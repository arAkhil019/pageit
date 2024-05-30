// Loops Example
let loopOutput = '';
for (let i = 1; i <= 10; i++) {
    loopOutput += 'Number: ' + i + '\n';
}
console.log(loopOutput);

// Functions Example
function greet(name) {
    return 'Hello, ' + name + '!';
}

let functionOutput = greet('Akhil');
console.log(functionOutput);

// Arrays Example
let fruits = ['Apple', 'Banana', 'Cherry'];
let arrayOutput = '';

for (let i = 0; i < fruits.length; i++) {
    arrayOutput += 'Fruit: ' + fruits[i] + '\n';
}

console.log(arrayOutput);
