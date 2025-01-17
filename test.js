import { Hashmap } from "./hash.js";

const test = new Hashmap();

test.set('apple', 'red')
test.set('banana', 'yellow')
test.set('carrot', 'orange')
test.set('dog', 'brown')
test.set('elephant', 'gray')
test.set('frog', 'green')
test.set('grape', 'purple')
test.set('hat', 'black')
test.set('ice cream', 'white')
test.set('jacket', 'blue')
test.set('kite', 'pink')
test.set('lion', 'golden')


console.log(test.getCapacity());

test.set('moon', 'silver');
console.log(test.getCapacity());
console.log(test.length());
console.log(test.entries());
console.log(test.keys());
console.log(test.values());
console.log(test.get("lion"));
console.log(test.has("ice cream"));
console.log(test.has("NOPE"))
console.log(test.clear());
console.log(test.entries());