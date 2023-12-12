//1 Create a var that stores the name

var name = prompt("what is your name?")

//2 Captalize the first letter of their name.

//a Isolate the first char
var firstChar =name.slice(0,1);

//b Turn the fisrt char to upper case
var upperCaseFirstChar = firstChar.toUpperCase();

//c Isolate the rest of the name

var restOfName = name.slice(1,name.length);

//d Change the rest of name to lower case.
var restOfName = restOfName.toLowerCase(); 


//e Concratenate the first char with the rest of the char
var capitalizeName = upperCaseFirstChar + restOfName; 

//3 We use the captalised version of their name to greet them using an alert.
alert("Hello, " + capitalizeName);

//Hello, Volcker


                        // Working with numbers 
//Dog Age to Human Age Formula
var dogAge = prompt("How old is your dog?");
humanAge = ((dogAge - 2) * 4) + 21;      
console.log("Your dog is" + humanAge + " old years.");