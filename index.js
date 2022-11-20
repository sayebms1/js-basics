
// // // // variables cannot be a resereved key words let, if, else
// // // // var names should be meaningful and descriptive
// // // // They cannot start with a number
// // // // cannot contain space of hiphen
// // // // Variable names are case sensitive
// // // // if wnanna declare multiple variables there are two ways
// // // // in one sigle line. modern is var in a single line
// // // // let firstName = 'Aaron', lastName = 'Sayeb';
// // // // let is for variable, and const is for constant
// // // // what are types of variavles we can assing to a variable
// // // // two categoreis of types: primitives(value types) and reference types
// // // // Primitevs: strings, nubmers, booleans, undefined, and null
// // // // let name = 'Aaron'; // string literal
// // // // let age = 30; // Number literal
// // // // let isApproved = true // Boolean Literal can be true/false
// // // // let firstNam = undefined; // if we don't define it at all it becomes undefined also
// // // // let selectedColor = null;  // in situations where we wanna clear the value of variable
// // // // // in ES 6 we have another primitive that is symbols that we will learn about later
// // // // Java script is a dynamic laguage
// // // // Static --> declare a variable the type is set and it cannot be changed in JS the type of var can change in runtime
// // // // undefined is a type and also a value. the type of selectedColor is object. lets check it here

// // // //Now lets look at the reference types: object, array , functoin
// // // // an object is like an object in real life. like a person it has name age address....

// // // let name = 'Aaron';
// // // let age = 30;
// // // // lets declare a person object
// // // let person = {
// // //     name: 'Aaron',
// // //     age: 30
// // // };  // curly braces is for object literal we can put key value pairs

// // // // change the name of the person, there are two way
// // // //1- dot notation
// // // person.name = 'John';

// // // //2- Bracket notation: instead of dots we use brackets

// // // person['name'] = 'Mary'

// // // // which one should be use dot notation or bracket notation. usually dot notation 
// // // // but sometimes we don't know the property of an object. in this case we will use the 
// // // // bracket notation. 
// // // let selection = 'name'
// // // person[selection] = 'Mary'

// // // console.log(person)

// // // noet we need a list sometimes
// // // the length of arrays as well as the type of elements in the array
// // // can change
// // let selectedColors = ['red', 'blue'];
// // selectedColors[2] = 'green'
// // // the type of objects are also dynamic
// // selectedColors[3] = 234
// // // technically an array is an object
// // console.log(selectedColors.length);

// //Lets define a function

// function greet(name, lastName){
//     console.log('Hello ' + name + ' '+ lastName);
// }

// // call the function
// greet('Aaron', 'Smith');

// what are types of functions we can use template literals to clean up the function
// the above function perfomrs a task, but sometimes functions can perform a task say calculate a socre

function square(number){
    return number*number
}


console.log(square(9));


