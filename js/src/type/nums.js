'use strict';

console.log(23 === 23.0); 
console.log(0.1 + 0.2 === 0.3)

// Conversion
// string to number
console.log(Number('23'))
console.log(+'23')

// Parsing
console.log(Number.parseInt('23'))
console.log(Number.parseInt('23px '))
console.log(Number.parseInt('e23')) // NaN
console.log(Number.parseFloat('e23')) // NaN

// console.log(parseFloat(' 2.5rem'))

// Check if is NaN
Number.isNaN(20)
Number.isNaN('20')
Number.isNaN(+ '20X') // true
Number.isNaN(23/0) // Infinite


// Check if is a number
Number.isFinite(20);

// Check if is a Integer
Number.isInteger 






