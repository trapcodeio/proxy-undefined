const {optional, optionalFn} = require('./index');

const data = {
    message: "Hello World",

    foo: () => {
        console.log('Foo function was called');
    },

    bar: () => {
        console.log('Bar function was called');
    }
};

console.log(data.message);
// => Hello World

data.foo();
// => Foo function was called

//////////////////////////
// Using data.name that does not exists
console.log(data.name);
// => undefined

console.log(optional(data).name);
// => undefined

console.log(optional(data, 'John Doe').name);
// => John Doe


//////////////////////////
// Using  data.message that exists.
console.log(optional(data).message);
// => Hello World

console.log(optional(data, 'John Doe').message);
// => Hello World


/////////////////////////
// Function test.

data.bar();
// => Bar function was called

// data.getFullName();
// => THIS WILL CAUSE AN ERROR
// Error: data.getFullName is not a function

// Using `optionalFn`
optionalFn(data).getFullName();
// => undefined

optionalFn(data, () => console.log('John P. Doe')).getFullName();
// => John P. Doe
// Default function ran instead.

console.log(optionalFn(data, 'john@doe.com').getEmail());
// => john@doe.com
// If default is not a function, it is returned directly.

