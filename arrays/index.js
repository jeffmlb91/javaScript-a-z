/**Arrays */

const  students = ["Bob", "Andy", "Andrew", "Jack"];

/**Array of object */

const studentObject= [
    {
        name: "Eddy",
        age: 19,
    },
    {
        name: "Paul",
        age: 20,
    },
    {
        name: "Mike",
        age: 21,
    },
    {
        name: "Sam",
        age: 70,
    },
];

//This data type should always be the same inside of an array and not two data type like this
const namesObject = [
    {
        name: "Eddy",
        age: 25,
    },
    "Andy",
    {
        name: "Frederick",
        age: 20
    },
    {
        name: "Alex",
        age: 75
    }
]

console.log("Your array is as follows", students);
console.log("Here is the array of Object", studentObject);
console.log("Here is the second array of object", namesObject);



/** Two dimensional Array */

const tradingData = [[1,2,3],[4,5,6],[7,8,9],[10,11,12]]