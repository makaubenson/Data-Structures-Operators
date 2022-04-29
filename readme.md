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
