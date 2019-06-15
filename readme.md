## ProxyUndefined

Return default value for object properties that does not exists i.e is **undefined**.

### Install
```console
npm install proxy-undefined

yarn add proxy-undefined
```

### Usage
```javascript
const {optional, optionalFn} = require("proxy-undefined");
// Or
import {optional, optionalFn} from "proxy-undefined";
```

### Why ProxyUndefined
When working with api's or objects, in some cases you may not know if a value exists in an object
and it will result to doing something like

```javascript
let requiredValue = SomeObject.name;

if(!requiredValue) { requiredValue = "Guest" }

// Or

if(!SomeObject.hasOwnProperty('name')) { requiredValue = "Guest" }
```

With **ProxyUndefined** using [Javascript Proxy Function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy),
all undefined paths will be replaced with the value you set as default.

```javascript
const {optional, optionalFn} = require('proxy-undefined');

let requiredValue = optional(SomeObject, 'default value').name;
```

### Example
```javascript
const {optional} = require('proxy-undefined');

const data = {
    message: "Hello World",

    foo: () => {
        console.log('Foo function was called');
    },

    bar: () => {
        console.log('Bar function was called');
    }
};

console.log(data.message);;
// => Hello World

data.foo();
// => Foo function was called

//////////////////////////
// Using data.name (undefined)
console.log(data.name);
// => undefined

console.log(optional(data).name);
// => undefined

console.log(optional(data, 'John Doe').name);
// => John Doe


//////////////////////////
// Using  data.message (defined)
console.log(optional(data).message);
// => Hello World

console.log(optional(data, 'John Doe').message);
// => Hello World
```

### Function Example
In Javascript if you call `data.getFullName()` and `getFullName` does not exists on the object we get an error.

with `optionalFn` you can set a default function if the one being called does not exists.
```javascript
// Using same data above.
data.bar();
// => Bar function was called

data.getFullName();
// => THIS WILL CAUSE AN ERROR
// Error: data.getFullName is not a function

// Using `optionalFn`
optionalFn(data).getFullName();
// => undefined
// No Fatal Errors.

optionalFn(data, () => console.log('John P. Doe')).getFullName();
// => John P. Doe
// Default function ran instead.

console.log(optionalFn(data, 'john@doe.com').getEmail());
// => john@doe.com
// If default is not a function, it is returned directly.
```

#### Fn: exists/optional
Checks if path exists in object else returns `[default=undefined]`
```javascript
const {exist} = require("proxy-undefined");

// is same as below, just an alias.


const {optional} = require("proxy-undefined");
```

#### Fn: fnExists/optionalFn
Checks if function exists else returns `[default=() => undefined]`
```javascript
const {fnExist} = require("proxy-undefined");

// is same as below, just an alias.

const {optionalFn} = require("proxy-undefined");
```

Hope you find this Useful. :)
