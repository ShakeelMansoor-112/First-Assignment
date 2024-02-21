"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Personal Message: Store a person’s name in a variable, and print a message to that person. Your message should be simple, such as, “Hello Eric, would you like to learn some Python today?”
let PersonName = "Shakeel";
let message = "Hi!Shakeel,how are you?";
console.log(message);
//Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
let lowercaseName = PersonName.toLowerCase();
console.log(lowercaseName);
let uppercase = PersonName.toUpperCase();
console.log(uppercase);
let titlecase = PersonName.charAt(0).toUpperCase() + PersonName.slice(1);
console.log(titlecase);
//Famous Quote: Find a quote from a famous person you admire. Print the quote and the name of its author. Your output should look something like the following, including the quotation marks:
console.log('Albert Einstein once said"Life is like riding a bicycle. To keep your balance, you must keep moving."');
//Famous Quote 2: Repeat Exercise 4, but this time store the famous person’s name in a variable called famous_person. Then compose your message and store it in a new variable called message. Print your message.
let famous_person = "Sir Francis Bacon";
let message2 = famous_person + 'once said, "Knowledge is power."';
console.log(message2);
//Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces.
let person = "\t Shakeel Ahmed \n";
console.log("Name with whitespace:", person);
let StrippedNames = person.trim();
console.log("StrippedNames:", person);
//Number Eight: Write addition, subtraction, multiplication, and division operations that each result in the number 8. Be sure to enclose your operations in print statements to see the results.
const addition = 4 + 4;
console.log("Addition Result:", addition);
const subtraction = 12 - 4;
console.log("Subtraction Result:", subtraction);
const multiplication = 4 * 2;
console.log("Multiplication Result:", multiplication);
const division = 16 / 2;
console.log("Division Result:", division);
//You should create four lines that look like this:
//Your output should simply be four lines with the number 8 appearing once on each line.
console.log("=".repeat(100));
console.log(5 + 3);
console.log("=".repeat(100));
console.log(12 - 4);
console.log("=".repeat(100));
console.log(4 * 2);
console.log("=".repeat(100));
console.log(16 / 2);
console.log("=".repeat(100));
//Favorite Number: Store your favorite number in a variable. Then, using that variable, create a message that reveals your favorite number. Print that message.
let favoriteNumber = 25;
let message3 = 'My favourite number is ' + favoriteNumber;
console.log(message3);
//Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each. If you don’t have anything specific to write because your programs are too simple at this point, just add your name and the current date at the top of each program file. Then write one sentence describing what the program does.
// My name is Shakeel MAnsoor.
/*thank u kamran Tessori for your initiative*/
//Names: Store the names of a few of your friends in a array called names. Print each person’s name by accessing each element in the list, one at a time.
let friendsName = ['Amjad', 'Danish', 'Mansoor', 'Rizwan'];
console.log(friendsName[0]);
console.log(friendsName[1]);
console.log(friendsName[2]);
console.log(friendsName[3]);
//Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.
console.log(friendsName[0] + ' HELLO! Hope you are fine.');
console.log(friendsName[1] + ' HELLO! Hope you are fine.');
console.log(friendsName[2] + ' HELLO! Hope you are fin.');
console.log(friendsName[3] + ' HELLO! Hope you are fine.');
//Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”
let favoritetransportation = ['unique Motorcycle', ' Suzuki Swift '];
console.log('I would like to ride ' + favoritetransportation[0]);
console.log('I would like to ride ' + favoritetransportation[1]);
//Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.
let guestarray = ['Ahmed', 'Adam', 'Rana'];
console.log(guestarray[0] + ' you are invited at the dinner.');
console.log(guestarray[1] + ' you are invited at the dinner.');
console.log(guestarray[2] + ' you are invited at the dinner.');
// Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.
let Cannotattend = ['Ahmed'];
console.log(Cannotattend + " Sorry, I cannot attend the dinner");
