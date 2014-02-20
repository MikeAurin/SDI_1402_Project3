// Mike Aurin
// SDI 1402
// Project 3
// The story behind project 3 is a refactoring of week 2's code.  I felt that changing the order of the functions to fit into my own custom flowchart would be a good experience with refactoring to make a story fit a criteria and still remain logical.

// Variables
var myBoss = "Bernie",
	theTheater = "Regal Cinemas at Sawgrass Mills Mall",
	newEmployeePrompt,
	myCompany = "Theater Hands",
	lightLocation,
	brokenBallast = false,
	lightsOn = false,
	boxOfBulbs = 12,
	lightsPerFixture = 4,
	myTools = ["screwdrivers", "pliers", "flashlights", "hammers"],
	restaurant,
	theaterJson,
	getLocation,
	

// prompt requirement
newEmployeePrompt = prompt("You are my new employee!  What is your name?"); 
if (newEmployeePrompt === "Lee") { 
	console.log("Nice to meet you.  You look like a strong, competent fellow.")
} else { 
	console.log("You're kind of scrawny, but you'll do.");
};

console.log("Welcome to " + myCompany + ", " + newEmployeePrompt + "!  You're my new helper, let's get started!");


var theaterJson = {

	"theaters": [
		{
			"theaterName": "Kendall Village",
			"workNeeded": false,
			"numberOfWorkers": 4
		},
		{
			"theaterName": "Cinemark Palace",
			"workNeeded": false,
			"numberOfWorkers": 3
		},
		{
			"theaterName": "Sawgrass Mills",
			"workNeeded": true,
			"numberOfWorkers": 2
		}
	]
	
};


var JSON = function() {

	for (var key in theaterJson.theaters) {
	
		for (var newKey in theaterJson.theaters[key]) {
		
			if (theaterJson.theaters[key][newKey] === "Sawgrass Mills") {
			
				console.log("We have a service call at " + theaterJson.theaters[key][newKey] + ".");
			}
		
		}
		
	};


};

JSON();

console.log("Today " + myBoss + " wants us to examine and repair a light fixture at " + theTheater + ".");

// array

console.log("Now we need our tools for the job");

for (var i = 0; i < myTools.length; i++) {
	console.log("In our tool bag we have " + myTools);

};

for (var i = 0; i < myTools.length; i++) {
	
	if (myTools[i] === "hammers") {
	
		console.log("We don't need the " + myTools[i]);
		
	} else {
	
		console.log("We are going to need the " + myTools[i]);
	
	};

};

// confirm
lightLocation = confirm("The light fixture that is out is located in the front of the auditorium, right?");
if (lightLocation === true) {
	console.log("Excellent, I'll go get the lift.")
} else {		
	console.log("Looks like you're going to have to go get that ladder.");
};

// boolean while loop
if (brokenBallast || lightsOn === false) {
	var getBulbs = function(newBulbs) {
		var brokenBulbs = 4,
			goodBulbs = 0;
		if (brokenBulbs > goodBulbs) {
			console.log("The light bulbs are bad.");
		} else {
			console.log("The ballast needs to be replaced.");
	}
		return goodBulbs;
	}
	
};
var replaceBulbs = getBulbs(4)
console.log("We need to replace " + replaceBulbs + " lights in this auditorium.");

neededBulbs = replaceBulbs;
console.log("A box of lights contain " + boxOfBulbs + " bulbs.  We only need " + replaceBulbs + " of them.");

// math for loop
var work = function() {
for (var lightsPerFixture = 4; lightsPerFixture > 0; lightsPerFixture--) {
	console.log("One light down, " + lightsPerFixture + " to go.  Hand me another one " + newEmployeePrompt + ".");
	 }
	var invoice = lightsPerFixture + 4
		return invoice;
};
		
var doWork = work();
console.log("Thanks " + newEmployeePrompt + ".  We changed " + doWork + " lights.");

console.log("Now we'll send an invoice for " + lightsPerFixture + " bulbs.");


// string concatenation
getFood = function(){
	var restaurant = confirm("Do you wanna go to Panda Express for lunch?  Otherwise we're hitting the Mickey D's drive thru on the way home.");
	if (restaurant === true) {
		restaurant = "Panda Express";
		} else {
		restaurant = "McDonalds";
	}
	return restaurant;
};
var restaurant = getFood()
console.log("Alright, " + newEmployeePrompt + "...Let's go to " + restaurant + ".");

console.log("Thanks for your hard work today " + newEmployeePrompt + "!  You learned how to change " + lightsPerFixture + " and we got some delicious " + restaurant + ".");




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
*/