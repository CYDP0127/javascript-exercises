// const example
const number = 1;
number = 2;


const person = {
  name: 'Daniel',
  age: 28,
};
person.name = 'Andrew';

const people = []
people.push(person)

console.log(person, people)

const foo = Object.freeze({
  'bar': 27
});
foo.bar = 42;
console.log(foo.bar);

console.log(x);
var x=5;
console.log(x);

console.log(x);
let x=5;
console.log(x);

for(var i=0; i<10; i++){
  console.log(i);
}
console.log(i);
const i = 1;

for(let j=0; j<10; j++){
  console.log(j);
}
console.log(j);
const j = 1;
