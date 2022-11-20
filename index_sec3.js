// let x = 10;
// let y = 3;

// console.log(x+y); 
// console.log(x-y);
// console.log(x*y);
// console.log(x/y);
// console.log(x%y);
// console.log(x ** y);

// incrfement and decrement operators. If ++ before x the value of x incremented first and then posted to console

// console.log(x++);
// console.log(x);

//decrement operator

// console.log(--x)

// Assingment operators
// let x = 10;
// x++; //exactly equivalent to x = x + 1 if we increase by 5 it does not owrk

// x += 5
// x *= 3

// Lets look at the comparison operators 
// relational opeartors
// let x = 1
// console.log(x>0);
// console.log(x>=1);
// console.log(x<1);
// console.log(x<=1);

// //equality operators
// console.log(x === 1);
// console.log(x !== 1);


// console.log( '1' === 1); // strict equality operator, ensure we have the same type and value 
// console.log( '1' == 1); // loose equality for eg '1' == 1 will give true while for === it gives false
// console.log(true == 1); // loose equality will look at the value on the left side and automatically convert what we have on the right side to a string
// // and if the values turn out to be equal then it will return zero
// console.log(true === 1); // lhs value is boolean, rhs number value is converted to bool and the equality check is performed
// // most of the time I use the strict equality operator (i guess like in python and ohter languages)

// If a customer has more than 100 points, they are 'gold' customer, otherwise, they are 'silver' customer

let points = 90;
let type = points > 100 ? 'gold' : 'silver'; // the ternary condition operator is this part: points > 100 ? 'gold' : 'silver'
console.log(type)
