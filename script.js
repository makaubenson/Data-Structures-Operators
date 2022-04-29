'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = '20:00',
    address,
  }) {
    console.log(
      `Order Received!. ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },
  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1},${ing2} and ${ing3}`
    );
  },
  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient, otherIngredients);
  },
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};
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
  numGuests: 20,
};
const rest2 = {
  name: 'La Plazza',
  owner: 'Giovanni Rossi',
};
//Logical Assignment Operators
//Or Assignment Operator
// rest1.numGuests = rest1.numGuests || 10;
//Or
rest1.numGuests ||= 10;
// rest2.numGuests = rest2.numGuests || 10;
//or
rest2.numGuests ||= 10;
console.log(rest1);
console.log(rest2);
/*
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
*/
