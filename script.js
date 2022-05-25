'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';
const weekdays = ['mon', 'tue', 'wed', 'thur', 'fri', 'sat', 'sun'];
const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  // [`day-${2 + 4}`]: {
  //   open: 0, // Open 24 hours
  //   close: 24,
  // },
  [weekdays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};
// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  orderDelivery({ starterIndex = 1, mainIndex = 0, time = '20:00', address }) {
    console.log(
      `Order Received!. ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },
  orderPasta(ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1},${ing2} and ${ing3}`
    );
  },
  orderPizza(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient, otherIngredients);
  },
  //before ES6
  // openingHours: openingHours,
  //ES6 Enhanced Object Literals
  openingHours,
};
//Looping Objects
/*
//Property Names
const properties = Object.keys(openingHours);
console.log(properties); // array with the property names
let openStr = `We are open on ${properties.length} days: `; // array with the property names
for (const day of Object.keys(openingHours)) {
  openStr = openStr + `${day}, `;
}
console.log(openStr);
//Property Values
let values = Object.values(openingHours);
console.log(values);
// for (const value of values) {
//   console.log(value);
// }
// Entire Object
const entries = Object.entries(openingHours);
// console.log(entries);
for (const x of entries) {
  console.log(x);
}

//destructure an object to access its values [key,value]
for (const [day, { open, close }] of entries) {
  console.log(`on ${day}, we open at ${open} and close at ${close}`);
}

//Without Optional Chaining
if (restaurant.openingHours && restaurant.openingHours.mon) {
  console.log(restaurant.openingHours.mon.open);
}
//With Optional Chaining
console.log(restaurant.openingHours.mon?.open);
console.log(restaurant.openingHours?.mon?.open);
//Example
const days = ['mon', 'tue', 'wed', 'thur', 'fri', 'sat', 'sun'];
for (const day of days) {
  console.log(day);
  // const open = restaurant.openingHours[day]?.open || 'Closed';
  const open = restaurant.openingHours[day]?.open ?? 'Closed';
  console.log(`On ${day}, we open at ${open}`);
}

//Methods

//checking if method named order exists
console.log(restaurant.order?.(0, 1) ?? 'Method Does Not exist');
console.log(restaurant.orderRisotto?.(0, 1) ?? 'Method Does Not exist'); //returns `Method Does Not exist`
// Arrays
const users = [{ name: 'Benson', email: 'bensonmakau2000@gmail.com' }];
console.log(users[0]?.name ?? 'User Array Empty');

//Another way to loop through Arrays
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu);
//a) looping using for loop
// for (let i = 0; i <= menu.length - 1; i++) {
//   console.log(menu[i]);
// }

//for of loop

for (const item of menu) console.log(item);

// getting indexes of arrays items using for of loop
console.log(menu.entries()); //Array Iterator {}
console.log(...menu.entries());
console.log(`..................METHOD 1................`);
for (const item of menu.entries()) {
  console.log(`${item[0] + 1} : ${item[1]}`);
}
console.log(`..................METHOD 2................`);
for (const [i, el] of menu.entries()) {
  console.log(`${i + 1} : ${el}`);
}


// restaurant.orderDelivery({
//   time: '22:30',
//   address: 'Via del Sole, 21',
//   mainIndex: 2,
//   starterIndex: 2,
// });
// restaurant.orderDelivery({
//   address: 'Via del Sole, 25',
//   starterIndex: 1,
// });
const rest1 = {
  name: 'Capri',
  // numGuests: 20,
  numGuests: 0,
};
const rest2 = {
  name: 'La Plazza',
  owner: 'Giovanni Rossi',
};
//Logical Assignment Operators
//Or Assignment Operator
// rest1.numGuests = rest1.numGuests || 10;
//Or
// rest1.numGuests ||= 10;
// rest2.numGuests = rest2.numGuests || 10;
//or
// rest2.numGuests ||= 10;
// console.log(rest1);
// console.log(rest2);

//Nullish assignment operator
rest1.numGuests ??= 10;
rest2.numGuests ??= 10;

//AND Assignment Operator (&&)
// rest1.owner = rest1.owner && '<ANONYMOUS>';
// rest2.owner = rest2.owner && '<ANONYMOUS>';
rest1.owner &&= '<ANONYMOUS>';
rest2.owner &&= '<ANONYMOUS>';
// console.log(rest1);
// console.log(rest2);

// Short Circuiting || (or) operator
console.log('------OR------');
console.log(3 || 'Benson'); //3
console.log('' || 'Benson'); //Benson since '' is a falsy value
console.log(true || 0); // True: since 0 is falsy
console.log(undefined || null); //output: null, both undefined and null are falsy.
console.log(undefined || 0 || '' || 'Hello' || 23 || null); // output 'Hello' since its the first truthy value

// restaurant.numGuests = 23;
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1);

const guests2 = restaurant.numGuests || 10;
console.log(guests2);

console.log('-----AND------');
console.log(0 && 'Benson');
console.log(7 && 'Benson');

console.log('Hello' && 23 && null && 'Benson'); //Null
if (restaurant.orderPizza) {
  restaurant.orderPizza('mushrooms', 'spinach');
}

restaurant.orderPizza && restaurant.orderPizza('Mushrooms', 'Spinash');

//The Nullish Coalescing Operator
restaurant.numGuests = 0;
const guests = restaurant.numGuests || 10;
console.log(guests);

//Nullish: null and undefined
const guestCorrect = restaurant.numGuests ?? 10;
console.log(guestCorrect);



// Rest Patterns and Parameters
//Arrays
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);

const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log([pizza, risotto, otherFood]);

//Objects
const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays);

// Functions
//Rest Arguments
const add = function (...numbers) {
  // console.log(numbers);
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum = sum + numbers[i];
    console.log(sum);
  }
};
//calling the function

add(2, 3);
add(5, 3, 7, 2, 4);
const x = [23, 5, 7];
add(...x);

restaurant.orderPizza('Mushrooms', 'Onions', 'Tomatoes', 'Fruits');

// The Spread Operator
const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr);

//Using the spread operator
const newArr = [1, 2, ...arr];
console.log(newArr);
console.log(...newArr); // 1,2,7,8,9

const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);

//Copying Arrays
const mainMenuCopy = [...restaurant.mainMenu];
console.log(mainMenuCopy);

//Join 2 arrays
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu);

// Spread operator on string
const str = 'Benson';
const letters = [...str, ' ', 'S.'];
console.log(letters);

// Real World Example
const ingredients = [
  prompt("Let's make pasta! Ingredient 1?"),
  prompt("Let's make pasta! Ingredient 2?"),
  prompt("Let's make pasta! Ingredient 3?"),
];
console.log(ingredients);
restaurant.orderPasta(...ingredients);

// Spread OPerator on Objects
const newRestaurant = { foundingIn: 1998, ...restaurant, founder: 'Guissepe' };
console.log(newRestaurant);

const restaurantCopy = { ...restaurant };
restaurantCopy.name = 'Ristorante Roma';
console.log(restaurantCopy.name);
console.log(restaurant.name);

//Destructing Objects
const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

//default values
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

Mutating Variables while destructing objects
let a = 111;
let b = 999;

const obj = { a: 23, b: 7, c: 14 };
({ a, b } = obj);
console.log(a, b);

//Nested Objects: Retrive opening and closing hours from fri object which is nested inside other object

const { fri } = openingHours;
console.log(fri);

const {
  fri: { open, close },
} = openingHours;
console.log(open, close);

//Assigning destructred values to variables
// const {
//   fri: { open: o, close: c },
// } = openingHours;
// console.log(o, c);

// const arr = [2, 3, 4];
// //Normal way of retriveing arrays
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];

// //Destructing Arrays
// const [x, y, z] = arr;
// console.log(x, y, z);
// console.log(arr);

// const [first, second] = restaurant.categories;
// console.log(first, second);//Italian Pizzeria

// Retrieve the third value without retreiving the 2nd
// const [first, , third] = restaurant.categories;
// console.log(first, third); //Italian Vegetarian

//Switching Array Values to opposite indexes
let [main, , secondary] = restaurant.categories;
console.log(main, secondary); //Italian Vegetarian

//Method 1: The old way
// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary);

//Method 2: Using Destructing
[main, secondary] = [secondary, main];
console.log(main, secondary);

console.log(restaurant.order(2, 0));

//Destructing: Reeceive 2 return values from a function
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

//Nested Array Destructing
const nested = [2, 4, [5, 6]];
// const [i, , j] = nested;
// console.log(i, j);
const [i, , [j, k]] = nested;
console.log(i, j, k);

//Default Values
const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r);

//Quiz: Challenge

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};
//solution
// 1: Create one player array for each team(variables: 'players1, and players2)
const [players1, players2] = game.players;
console.log(`Players 1`, players1, `Players 2`, players2);

let [gk, ...fieldPlayers] = players1; // Using Rest Operator
console.log(`Players1 Field Players Team:`, fieldPlayers);

const allPlayers = [...players1, ...players2]; //spread operator
console.log(`All Players:`, allPlayers);

const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
console.log(`All Team one players`, players1Final);

// const team1 = game.odds.team1;
// const draw = game.odds.x;
// const team2 = game.odds.team2;
const {
  odds: { team1, x: draw, team2 },
} = game;
console.log(
  `The odds of team1 is ${team1}, team2 is ${team2} and Draw is ${draw}`
);

const printGoals = function (...players) {
  console.log(`${players.length} goals were scored`);
};

printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
printGoals('Davies', 'Muller');
printGoals(game.scored);
printGoals(...game.scored);

team1 < team2 && console.log('Team 1 is more likely to win');
team1 > team2 && console.log('Team 2  is more likely to win');

//Coding Challenge

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};
//step 1: Loop Over game.scored and print each player to the console together with the number of goals scored
const players = Object.entries(game.scored);
console.log(players);
for (let [goal, player] of players) {
  goal = parseInt(goal); //convert string to int
  goal = goal + 1;
  console.log(`Goal ${goal}  : ${player}`);
}
//step 2: use the loop to calculate the average odd and log it to the console
//method 1
// const odds = Object.values(game.odds);
// console.log(`The odds are: ${odds}`);
// let sum = 0;
// for (const value of odds) {
//   sum = sum + value;
// }
// // console.log(sum);
// const oddsAverage = sum / odds.length;
// console.log(`The odds average is: ${oddsAverage}`);
// console.log(`The odd of Bayern Munich is: ${odds[0]}`);
// console.log(`The odd for Draw is: ${odds[1]}`);
// console.log(`The odd of Real Madrid is: ${odds[2]}`);

//method 2
//option 1
// let average = 0;
// const odds = Object.values(game.odds);
// console.log(`odds: ${odds}`);
// for (const odd of odds) average += odd;
// console.log(`old average: ${average}`);
// average /= odds.length;
// console.log(`New  AVG: ${average}`); //3.6933333333333334

//option 2 : for with curly braces
let average = 0;
const odds = Object.values(game.odds);
console.log(`odds: ${odds}`);
for (const odd of odds) {
  average += odd;
  console.log(`old average: ${average}`);
  average /= odds.length;
  console.log(`New  AVG: ${average}`);
}

//3
// const team1 = game.team1;
// const team2 = game.team2;
// console.log(`Team 1 is: ${team1} and team 2 is : ${team2}`);

for (const [team, odd] of Object.entries(game.odds)) {
  const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`;
  console.log(`Odd of ${teamStr}  ${odd}`);
}

// console.log(scorers);
// BONUS
// So the solution is to loop over the array, and add the array elements as object properties,
// and then increase the count as we encounter a new occurence of a certain element
const scorers = {};
for (const player of game.scored) {
  scorers[player] ? scorers[player]++ : (scorers[player] = 1);
}
console.log(scorers);


//Sets
const ordersSet = new Set([
  'Pasta',
  'Pizza',
  'Pizza',
  'Rissoto',
  'Pasta',
  'Pizza',
]);
console.log(ordersSet); //Set(3) {'Pasta', 'Pizza', 'Rissoto'}

//Strings are also iterables
console.log(new Set('Benson')); //Set(5) {'B', 'e', 'n', 's', 'o'}

console.log(new Set()); // Set can also be empty

// Checking set size
console.log(ordersSet.size);

//Check if a certain element is in a set
console.log(ordersSet.has('Pizza')); //True
console.log(ordersSet.has('Bread')); // False

//adding new elements to a set
ordersSet.add('Garlic Bread');
console.log(ordersSet);

//Delete elements from a set
ordersSet.delete('Rissoto');
console.log(ordersSet);

// Deleting all elements of a set
// ordersSet.clear();
// console.log(ordersSet);

// Looping Over Sets
for (const order of ordersSet) console.log(order);

// Set Use Case
// The MAIN use case for sets is to remove duplicates values of arrays.
const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
// get all staff roles without duplicates
const staffUnique = new Set(staff);
console.log(staffUnique);

// converting set to array using spread operator(...)
const newStaffArray = [...new Set(staff)];
console.log(newStaffArray);
//finding set size
console.log(new Set(newStaffArray).size);

//count how many different letters are in a string
console.log(new Set('jonasschmedtmann').size);

// Maps
// Creating a Map
const rest = new Map();
rest.set('name', 'Classico Italiano');
rest.set(1, 'Firance, Italy');
rest.set(2, 'Lisbon, Portual');
console.log(rest); //Map(3) {'name' => 'Classico Italiano', 1 => 'Firance, Italy', 2 => 'Lisbon, Portual'}

//Chaining set method
rest
  .set('Categories', ['Italian', 'Pizzeria', 'Vegeterian', 'Organic'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'We are open :D')
  .set(false, 'We are closed :( ');
// console.log(rest);

// Reading Data from a Map we use get() method
// What is required is to just parse a key to the method
console.log(rest.get('name')); //Classico Italiano
console.log(rest.get(true)); //We are open :D

const time = 21;
console.log(
  `At ${time} hours,`,
  rest.get(time > rest.get('open') && time < rest.get('close'))
);

// Check if a map contains a certain key
console.log(rest.has('Categories'));

//Delete elements from the map
rest.delete(2);
// Checking size of a map
console.log(rest.size);

//remove all elements from the map
// rest.clear();
// console.log(rest);

// using arrays and objects as map keys
const arr = [1, 2];
rest.set(arr, 'Test');
console.log(rest);
//accessing value held by the array keys
console.log(rest.get(arr));

rest.set(document.querySelector('h1'), 'Heading');
console.log(rest);


// Maps Iteration
const question = new Map([
  ['question', 'Whats the best programming language in the world?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'JavaScript'],
  ['correct', 3],
  [true, 'Correct🎉'],
  [false, 'Wrong!, Try Again😢'],
]);
console.log(question);

//converting objects to maps
// console.log(Object.entries(openingHours));

const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap);
//Quiz App
console.log(question.get('question'));
//destructuring question map
for (const [key, value] of question) {
  if (typeof key === 'number') console.log(`Answer ${key}: ${value}`);
}
// const Answer = Number(prompt('Your answer ?'));
const Answer = 3;
console.log(Answer);
// console.log(question.get('correct') === Answer); //true
console.log(question.get(question.get('correct') === Answer));

//converting map to array using spread operator
console.log(...question);
// console.log(question.entries());
console.log([...question.keys()]);
console.log([...question.values()]);

// Coding Challenge #3


Let's continue with our football betting app! This time, we have a map with a log of the events that happened during the game. The values are the events themselves, and the keys are the minutes in which each event happened (a football game has 90 minutes plus some extra time).

1. Create an array 'events' of the different game events that happened (no duplicates)
2. After the game has finished, is was found that the yellow card from minute 64 was unfair. 
So remove this event from the game events log.
3. Print the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)
4. Loop over the events and log them to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this:
      [FIRST HALF] 17: ⚽️ GOAL

GOOD LUCK 😀

*/
const gameEvents = new Map([
  [17, '⚽️ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽️ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽️ GOAL'],
  [80, '⚽️ GOAL'],
  [92, '🔶 Yellow card'],
]);

//Create an array 'events' of the different game events that happened (no duplicates)
let events = new Set([...gameEvents.values()]);

//After the game has finished, is was found that the yellow card from minute 64 was unfair. so remove this event from the game events log.
gameEvents.delete(64); //deleting value of a map using the key
console.log(gameEvents); //New Values

// //Print the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)

for (let time = 9; time <= 90; time = time + 9) {
  // console.log(time);
  let str = `An ${gameEvents.entries()} happened after ${time} minutes`;
  console.log(str);
}

//Loop over the events and log them to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this: // [FIRST HALF] 17: ⚽️ GOAL
for (const [key, value] of gameEvents) {
  let halftime = 45;
  let string = '';
  if (key <= halftime) {
    string = ` [FIRST HALF] ${key}: ${value}`;
  } else {
    string = ` [SECOND HALF] ${key}: ${value}`;
  }
  console.log(string);
}
