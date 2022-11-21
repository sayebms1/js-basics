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

// let points = 90;
// let type = points > 100 ? 'gold' : 'silver'; // the ternary condition operator is this part: points > 100 ? 'gold' : 'silver'
// console.log(type)

// Lets look at logical operators
// 3 types: logical and logical or and not
// logical AND (&&) if both operands are true

// let highIncome = true;
// let goodCreditScore = true;
// let eligibleForLoan = highIncome && goodCreditScore
// console.log(eligibleForLoan)

// // Logical OR indicated by || 
// let highIncome = false;
// let goodCreditScore = false;
// let eligibleForLoan = highIncome || goodCreditScore
// console.log('Eligible', eligibleForLoan)

// // NOT ! operator
// let applicationRefused = !eligibleForLoan

// console.log('Application Refused ', applicationRefused)

//so far we use logical operators wtih boolean
// but we can use logical operators with non boolean values

// in logical operators JS tries to interpret values as truthy or falsy for eg fals || 'Mosh' wil give 'Mosh'
// false || true will give true; flase || 1 will give 1 instead of just true

// Falsy its not a boolean false what are these values: Undefined, null, 0, false '', NaN (not a number) all these values will be conisidered as falsey
// anythin that is not Falsey will be considrered as Truthy
// e.g. false || 'mosh'  looks at first operand and mosh is truthy (since its not in any of the falsy value) it will give the truthy value which is 'mohs' in this case

// IMPORTANT: what happens with this false || 1 || 2 this will give 1. This is called short ciecuiting. As soon as it find an operand that is truthy that operand is returned
// first truthy operand is 1 here . this is short circuiting

// //Now lets see a real world example of where to use this

// let userColor = undefined;
// let defaultColor = 'blue';
// let currentColor = userColor || defaultColor; //this means if we have a value for userColor we use it and if not we will use defaultColor;

// console.log(currentColor);

// The last group of operators we wanna look at is bitwise operators
// we are gonna look at some CS stuff. 
// 1 = 00000001 each digit is a bit, we have 8 bits
// 2 = 00000010 if you add the bitwise operators of 1 and 2 yo will get 3
// 3 = 00000011
// bitwise operators work like the logic operators but on the individual bits
// bitwise operation look sat individual 1s and 0s of the 8bit representation of a nubmer
// bitwise oeprators are represented with single | and single & 
//  console.log(1 | 2);  // gives 3 as output
//what about bitwise and?
// console.log(1 & 2);

// Read, Write, Execute --> we wil define an access control ssytem 
// 00000100
// 00000110
// 00000111

// const readPermission = 4;
// const writePermission = 2;
// const executePermission = 1;

// let myPermission = 0;
// myPermission = myPermission | writePermission ;

// let message = (myPermission & readPermission) ? 'yes' : 'no';

// console.log(message);

// Operator precedence

// let x = (2+3)*4
// console.log(x)

// let x = 10;
// let y = (x>5) && (x<15)
// console.log(y)

// let x = 1;
// let y = x!==2;
// console.log(y);


// let a = 'red';
// let b = 'blue';
// let temp = b;
// b = a;
// a = temp;

// console.log(a);
// console.log(b);


math.kldivergence([0.7, 0.5, 0.4],[0.2, 0.9, 0.5])