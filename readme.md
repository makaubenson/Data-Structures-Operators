# Data-Structures-Operators

## Destructing Arrays

- Destructing is (ES6 feature) a way of unpacking values from an array or an object into separate variables. Is breaking complex data structure down into smaller data structure like a variable.
- In arrays we use destructing to retreive values from an array and store them in variables in a simple way.
- `const nested = [2, 4, [5, 6]]; const [i, , j] = nested;console.log(i, j);`

## Destructing Objects

- We use curly braces({})

## The spread operator (...)

- Lets say we have the array `const arr = [7, 8, 9];`
- To use spread operator, it would be `const newArr = [1, 2, ...arr];`
- `console.log(newArr);`
- The spread operator takes all values out of array and write them individually.
- Does not create new variables
- Used where values are needed in comma separated list.
- Spread operator works on all iterables (arrays,strings,maps,sets BUT NOT OBJECTS).
- We can only use spread operator when:

  - Building a new array.
  - Passing values to a function.

- Sinc ES2018 the spread operator works on objects despite that it is not an iterable.

# Rest Patterns and Parameters

- Rest Operator Collects multiple values and condenses them into an array.
- Its the opposite of spread operator.
- `const [a, b, ...others] = [1, 2, 3, 4, 5];` Its rest operator since its on the left site of the assignment operator(=)
- Takes remaining elements of an array and puts them in a new array.
- It takes all the values after the last element. It does not include the skipped elements.
- The Rest element must be the last element on the destructuring syntax.

# Short Circuiting

### Logical Operators

- Use any datatypes
- They can return any data type
- The do short circuiting (short circuit evaluation)

- `For the case of OR Operator`- Short Circuting means that if the first value is a truthy value, it will return that first value. e.g `console.log(3 || 'Benson');`

- `And Operator &&` - It short circuits when the first value is falsy and immediately returns that short value without evaluating the second operand.
- And operator returns the second operand

### Logical Assignment Operators

#### Or Assignment Operator(||)

- `rest1.numGuests ||= 10;` is similar to writing `rest2.numGuests = rest2.numGuests || 10;`7

#### Nullish Assignment Operator (??)

- Assigns value to a variable if the value is currently `undefined` or `null`.

#### And Operator (&&)

- Short circuits when the first value is falsy and displays the second value.

## Looping through Arrays

### for of loop

- `for (const item of menu) console.log(item);`
- Automatically loops through an array and gives a value at every iteration
- We can use `continue` and `break` keywords.
- `menu.entries()` is an array Iterator which inside itself containes other arrays with an index and value

### Optional Chaining (?)

- `console.log(restaurant.openingHours.mon?.open);`
- Only when the value before the `?` exists that the value after it will be read.
- For the scenario above, only when `restaurant.openingHours.mon` exists that `open` will be read, else it will return undefined.

#### Optional Chaining -Methods

- We can check if a method exists before calling it.
- checking if method named order exists
- `console.log(restaurant.order?.(0, 1) ?? 'Method Does Not exist');`

#### Optional Chaining -Arrays

- we can use optional chaining to check if an array is empty.
- `const users = [{ name: 'Benson', email: bensonmakau2000@gmail.com' }];`
- `console.log(users[0]?.name ?? 'User Array Empty');`
- Log the `users[0]` of users array only if it exists else log 'User Array Empty'.

## Sets

- The Set object lets you store unique values of any type, whether primitive values or object
- Set objects are collections of values. You can iterate through the elements of a set in insertion order.
- A value in the Set may only occur once; it is unique in the Set's collection.7
- To create a set : `const orderSet = new Set(parse and iterable here: e.g array);`
- `const orderSet = new Set(['Pasta', 'Pizza','Pizza','Rissoto','Pasta','Pizza']);`
- A set can hold values with different datatypes
- Does not display duplicates despite having them existent in the set.

- Note: `Strings are iterables`
- Set has to be unique, thus if 2 values exist with the same name, it ignores one of them and displays one
- It is possible to loop over sets.
- Looping Over Sets
- `for (const order of ordersSet) console.log(order);`
- The MAIN use case for sets is to remove duplicates values of arrays.
- `note`: Sets are not intended to replace arrays

## Maps

- They are more useful than sets.
- A map is a data structure that we can use to map values to keys.
- Data is stored in key value pairs in maps
- Keys in maps can be `any type` different from objects where keys are only `strings`.
- Creating a Map
- The easiest way to create a map it to create an empty map and populate it using `set()` method with 2 params
- `const rest = new Map();`
- `rest.set('name', 'Classico Italiano');`

### Reading data from Maps

- To read data from a map we use `get()` method.
- Its available on all maps.
- All we need is to parse the name of the key.
- The key's data type should be retained while being parsed.
- We can delete elements using delete operator. This is however a slow process
- It is possible to use `arrays and objects` as `map keys`.

### Maps Iteration

- Method 2 of creating maps
- `const question = new Map([ ['question', 'Whats the best programming language in the world?'], [1, 'C'], [2, 'Java'], [3, 'JavaScript'], [true, 'Correct🎉'], [false, 'Try Again😢'], ]);`
- Array of arrays

### converting objects to maps

- console.log(Object.entries(openingHours));

- const hoursMap = new Map(Object.entries(openingHours));
- console.log(hoursMap);

#### Maps Iteration

- `const question = new Map([ ['question', 'Whats the best programming language in the world?'], [1, 'C'], [2, 'Java'], [3, 'JavaScript'], ['correct', 3], [true, 'Correct🎉'], [false, 'Wrong!, Try Again😢'], ]);`

### Iterating Through The Map

- `for (const [key, value] of question) { if (typeof key === 'number') console.log(`Answer ${key}: ${value}`); }`

### Converting map to array using spread operator

- `console.log(...question);`
- `console.log(...question);`
- `console.log(question.entries());`
- `console.log([...question.keys()]);`
- `console.log([...question.values()]);`

# Which Data Structure to Use (Arrays, Objects, Sets, Map)

### Sources of Data

- From program itself: Data written directly in source code(status messages)
- User Interface - Forms, DOM, etc
- External sources (Web APIs)

- For simple list of values, we use `Arrays or Sets`

#### Arrays

- `tasks = ['Code','Eat','Code'];`
- `Output: {'Code','Eat','Code'}`
- Arrays are used when you need ordered list of values, might have duplicates
- Also used when you need to manipulate data since there a torn of array methods.

#### Sets

- `tasks = new Set(['Code','Eat','Code']);`
- `Output: {'Code','Eat'}`
- Sets are used when there is need to work with unique values
- Used when high perfomance is really important
- Used to remove duplicates from arrays.

- If we need `key/value` pairs then we need `Objects or Maps`. Keys allow us to describe values
- Data from web apis is stored in `Objects` There exist keys in json data.

### Objects

`task ={ task:'code', date:'today', repeat: true};`

- Easier to use
- More traditional `key/value` store
- Easy to write and access values with `.` and `[]`

#### Objects are Used when you need:

- To include functions(methods)
- Used when working with JSON (Can convert to map)

### maps

`task =new Map([ ['task':'code'], ['date':'today'], [false: 'Start Coding!']]);`

- better Performance
- Keys can have any data type
- Easy to iterate
- Easy to compute size

#### Maps are Used when you need:

- To map keys to values
- You need keys that are not strings

- Other data structures include `WeakMap and WeakSet`

## WORKING WITH STRINGS

- const airline = 'TAP Air Portugal';
- const plane = 'A320';
- `console.log(plane[0]);` //A
- `console.log(plane[1]);` //3
- `console.log(plane[2]);` //2
- `console.log(plane[3]);` //0
- `console.log(plane[4]);` //undefined
- `console.log('B752'[0]);` //B

### String Methods

- `console.log(airline.indexOf('r'));` // 6
- `console.log(airline.indexOf('t'));` // 11
- Strings are zero based, its index counting starts from 0
- `console.log(airline.lastIndexOf('P'));` // 8 Prints last occurence of 'P'

- `indexOf()` and `lastIndexOf()` are case sensitive

## slice()

- First argument is that beggining value.
- The last argument is the end value and not included in the string
- `console.log(airline.slice(4)); // extracts string as from the 4th index`. `//Air Portugal`
- `console.log(airline.slice(4, 7)); // extracts string as from the 4th index to 6th index. // Air`
- slice cant mutate or change the string. It just returns a new string nothing else.
- length of the extracted string is `end - begginning value`

## Note

- Strings are primitive and thus no methods can be called to them. For javascript however the case is different, when a method is called on a string, js converts the string primitive to a string object from which then a method is called. This process is called `boxing`. Js usually calls the `String()` function to handle that.

- `console.log(new String('Benson'))`//String {'Benson'}

- `console.log(typeof new String('Benson'))`//object
- After the process is done, the object is now converted back to string

- `toLowerCase()` and `toUpperCase()` methods for case manipulation
- `trim()` used to string unnecessary whitespaces from a string.
- There is also `trimStart` and `trimEnd` - for triming spaces from only the `start` and from the `end` respectively.

### Replacing

- `const priceGB = '288,97£';`
- `const priceUS = priceGB.replace(',', '.').replace('£', '$');`
- `console.log(priceUS);`
- `const announcement = 'All passengers come to boarding door 23. Boarding door 23!';`
- `console.log(announcement.replaceAll('door', 'gate'));`
- `replaceAll()` - replaces all instances of a string defined in the function. Like the `door` instance above.

### Method 2: Regular Expression

- `console.log(announcement.replace(/door/g, 'gate'));`

##### includes(), startsWith() and endsWith() -Booleans

- `const plane = 'A320neo';`
- `console.log(plane.includes('A320'));`
- `console.log(plane.startsWith('A53'));`
- `console.log(plane.startsWith('A3'));`
- `console.log(plane.endsWith('A3'));`
- `console.log(plane.endsWith('neo'));`
