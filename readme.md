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
