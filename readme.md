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
