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
	lightsPerFixture = 2,
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

// JSON

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
myTools[4] = "wire strippers"
console.log("I almost forgot, we are going to need " + myTools[4] + " as well.");

// confirm

lightLocation = confirm("The light fixture that is out is located in the front of the auditorium, right?");
if (lightLocation === true) {
	console.log("Excellent, I'll go get the lift.")
} else {		
	console.log("Looks like you're going to have to go get that ladder.");
};

// boolean while loop

if (brokenBallast || lightsOn === false) {
	var getBulbs = function(goodBulbs) {
		var brokenBulbs = 4,
			goodBulbs = 0;
		while (brokenBulbs > goodBulbs) { 
		console.log("There are " + brokenBulbs + " lights left to be removed.");
		brokenBulbs--; 
		goodBulbs++;
		}
	return goodBulbs;
	}
			
};
var replacedLights = getBulbs(4);
console.log("Only " + replacedLights + " lights have to be replaced in this fixture.  The other " + replacedLights + " are still good.");

neededBulbs = replacedLights;
console.log("A box of lights contain " + boxOfBulbs + " bulbs.  We only need " + replacedLights + " of them.");

// math for loop
var work = function() {
for (var lightsPerFixture = 2; lightsPerFixture > 0; lightsPerFixture--) {
	console.log("One light down, " + lightsPerFixture + " to go.  Hand me another one " + newEmployeePrompt + ".");
	 }
	var invoice = lightsPerFixture + 2
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
