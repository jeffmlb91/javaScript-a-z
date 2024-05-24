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