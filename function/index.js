//Function 

/**Function Declaratiobn */
/**
 * function callName(name): This declares a function named callName that takes one parameter, name.
  { ... }: The curly braces define the body of the function, which contains the code to be executed when the function is called.
  console.log('My name is' + name): This line prints a message to the console. The message is the string 'My name is' concatenated with the value of the name parameter.
    `Function Keyword`: The function keyword is used to define a function.
    `Function Name`: callName is the name of the function.
    `Parameter` : name is a parameter that the function expects. It's a placeholder for the value that will be passed to the function when it is called.
     `Function Body`: Inside the curly braces {}, the function body contains the statements that will be executed when the function is called.

 */

function callName (name) {
    console.log('My name is ' + name)
}

// Function expression
/**
 * A function expression in JavaScript is another way to define a function. Unlike function declarations, 
 * function expressions are not hoisted, meaning they are not available for use until they have been defined.
 */
callName('Henry') 

const firstName = (name) => {
    console.log('My first name is ' + name)
}
firstName('Eddy')

const secondFirstName = (name) => {
    //Using string interpolation
    /**Template Literal: ${name} is used to interpolate the name variable into the string.
 */
    firstName(`My first name is really ${name}`)
}
secondFirstName("Edward");

const personID = (name, age)  => {
 console.log(`My name is ${name} and I am ${age}`)
}

personID("Emily", 36);


//Partial function

/**This is a higher-order function that creates a partially applied function. Here’s how it works:

First Step: You provide the first number (let's call it the "multiplier").
Second Step: The function returns a new function that takes the second number and multiplies it by the first number.
 */
const multiplier = (multiplier) => (number) => {
    return multiplier * number;
}
const doubleNumber = multiplier(2);


console.log(doubleNumber(10))


const createURL = baseURL => path => `https://${baseURL}/${path}`;

const myURL = createURL("www.devloper.com")("learn");

console.log(myURL)

//Recursive JS function 
//First learning what it does
function countDown(fromNumber) {
    if(fromNumber >= 0) {
        console.log(fromNumber);
        countDown(fromNumber - 1);
    } else {
        console.log(0);
    }
}
console.log(countDown(10))

//Now Recursion -> Doing it the proper way

function completeRecursion (startNumer) {
    //We start with the base condition to exit the recursion first
    
    if(startNumer < 0) return
    console.log(startNumer);
    completeRecursion(startNumer - 1)
}

console.log(completeRecursion(10))

//LOOPS
//Let do the old way of using loops

const cars = ["Bmw", "Audi", "Mercedes", "AMG"]

for (let i = 0; i < cars.length; i++) {
    console.log(cars[i])
}

//We should be using ES6 functions instead
//We can user MAP or ForEach: Differnce is that Map returns a new array with value and forEach does not return am array.
//You can see that in the REPL

const planes = ["Boing 787", "Boing 747", "Boing 737-Max", "Boing 777", "Airbus A380", "Airbus A30", "Airbus 757"];

//map is used to iterate over an array and transform each element into a new value. It returns a new array with the updated value
planes.map((plane) => {
    console.log(plane)
    return planes
})

//forEach is used to iterate over an array and perform a function on each element, but it does not return a new array.
planes.forEach((plane) => {
    console.log(plane)
    return planes
})

//map does not modify the original array.

const numbers = [1,2,3,4,5];

const multipliedNumber = numbers.map((number) => {
    return number * 5
})

console.log(multipliedNumber);

// forEach does not modify the original array.
const secondSetNumbers = [6,7,8,9,10];
const multipliedSecondSet = secondSetNumbers.map((number) => {
    return number * 5
})

console.log(secondSetNumbers);


//Map with 2 dimension array

const voiture = [["BWM", "Audi"], ["Mercedes", "AMG"], ["Honda", "Acura"], ["Lambo", "Ferrari"]]

const genreOfCars = voiture.map((car) => {
    console.log(car);
})

// ASYNC 

const fetchAPItoDos = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/todos');
    const todos = await res.json();
    console.log(todos);

    return todos;
}
fetchAPItoDos()