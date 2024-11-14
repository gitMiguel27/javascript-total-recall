/* 
PART 1: VARIABLES AND DATA TYPES

PART A: Q + A

1. How do we assign a value to a variable?
    - With the assignment operator. 

2. How do we change the value of a variable? 
    - By reassigning a new value.

3. How do we assign an existing variable to a new variable?
    - Declaring the new vairable and assigning its value to the existing variable.

4. Remind me, what are declare, assign, and define?
    - Declaring a vairable means to name a new variable. You can assign a variable its value with the assignment operator. Defining is the process of declaring and assigning.

5. What is pseudocoding and why should you do it?
    - Pseudocoding is when you write down comments on your thought process/ approach to tackling a problem. This helps you organize your thoughts and creates a game plan for what you need to accomplish step-by-step.

6. What percentage of time should be spent thinking about how you're going to solve a problem vs actually typing in code to solve it?
    - I would say around 35% should be given to thinking of game plan. However, it is important to think of a game plan before you start coding so that you avoid going back and forth with your code. Coding should then take up the rest of your effort because you can also start working from something foundational up to something fully developed.

*/

// PART B: STRINGS

// Create a variable called firstVariable
    let firstVariable;
// Assign it the value of the string "Hello World"
    firstVariable = "Hello World";
// Change the value of this variable to some number
    firstVariable = 8;
// Store the value of firstVariable in a new variable called secondVariable
    secondVariable = firstVariable;
// Change the value of secondVariable to any string.
    secondVariable = "Hello Hello Hello!"
// What is the value of firstVariable?
    8
// Create a variable called yourName and set it equal to your name as a string. Then, write an expression that takes the string "Hello, my name is " and the variable yourName so that it returns a new string with them concatenated.
    let yourName = "Miguel";
    console.log("Hello, my name is " + yourName);

// PART C: BOOLEANS

// Using the provided variable definitions, replace the blanks so that all log statements print true in the console. Answers should be all be valid JS syntax and not weird things that don't make sense but happen to print true to the console
    const a = 4; const b = 53; const c = 57; const d = 16; const e = 'Kevin';

    console.log(a < b); 
    console.log(c > d); 
    console.log('Name' == 'Name'); 
    
    // FOR THE NEXT TWO, USE ONLY && OR || 
    console.log(true || false);
    console.log(false && false && false && false && false || true);

    console.log(false === false);
    console.log(e == 'Kevin'); 
    console.log(a + b >= c); 
    // note: a < b < c is NOT CORRECT (and is not a valid JS expression, think about using other math operations)

    console.log(a * a <= d); 
    // note: the answer is a simple arithmetic equation, not something "weird" 
    
    console.log(48 == '48');