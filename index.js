// code your solution here
//define a function using function declaration
function saturdayFun (activity1 = 'roller-skate') {
    return `This Saturday, I want to ${activity1}!`;
}
//hoisting javascripts ability to call functions before they appear in the code
// for hoisting to work a function must be defined using a function declaration
// NB functions expressions cannot be hoisted
//define a function using a function expression
const mondayWork = function (activity2='go to the office') {
    return `This Monday, I will ${activity2}.`;
}
// Creating an anonymous function
// this is a function without a name ,this would make calling on the function difficult therefore we find ways to call it
// 1 Using () to group the function to be evaluated 
// 2 Using a variable and assigning the function as it value
// Function level scope
//This is when a function is defined inside another function and the inner function has access to all the parameters and variables of the outer function


const wrapAdjective = function (visualFlair = "*") {
    return function (adjective = "AIM") {
        return `You are ${visualFlair}${adjective}${visualFlair}!`;
    }
}

