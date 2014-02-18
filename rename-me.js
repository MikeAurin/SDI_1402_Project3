alert("JavaScript works!");

// Mike Aurin
// SDI 1402
// Project 3
// The story behind project 3 is a refactoring of week 2's code.  I felt that changing the order of the functions to fit into my own custom flowchart would be a good experience with refactoring to make a story fit a criteria and still remain logical.






//Requirements:
/*
// Loops 
For your project you'll need to loop over an array and perform some kind of math or other logical function on the items in the array. 
For example, you could sum the values in the array, find an average or the minimum or maximum, count the occurences of a specific item, or all of the numbers greater or less than the item. 
Thus, you need to demonstrate that you can:
	Loop over arrays
	Find the number of items in an array
	Work with array indexes
 Get data into and out of arrays

// JSON
Since JSON is a subset of JavaScript literal values, even a single variable of any type is technically JSON. 
However, for the purpose of this project, the JSON requirement is as follows:
	The top level (outermost) data type must be an object or array.
	There must be at least two levels of additional types beneath the top level type, for a total of at least 3 levels of data. That is, you may have an object that has an array of objects, or an object with an array of arrays, or an array with objects within objects, etc.
	At the innermost level you will have the primitive data types: strings, numbers, and booleans.
For example, I might have a pirate object, with a ships array property, where each item was an object with properties such as shipName, cargoSpace, etc. There are three levels (pirate→ships→ship) and primitive data at the lowest level.
The intent here is to get you used to working with complex, nested data.