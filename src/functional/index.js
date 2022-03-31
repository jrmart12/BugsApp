//function compositions
//composing and piping with lodash
//currying
import { compose, pipe } from "lodash/fp";
import { Map } from "immutable";
import { produce } from "immer";

let input = "    Javascript    ";
// let output = "<div>" + input.trim() + "</div>";

const trim = (str) => str.trim();
const toLowerCase = (str) => str.toLowerCase();
const wrap = (type) => (str) => `<${type}>${str}</${type}>`;

// const transform = compose(wrapInDiv, toLowerCase, trim);
const transform = pipe(trim, toLowerCase, wrap("div"));
console.log(transform(input));

//inmutability

//updating objects
const person = {
  name: "John",
  address: { country: "United States", city: "San Francisco" },
};

const updated = {
  ...person,
  address: {
    ...person.address,
    country: "England",
  },
  name: "Bob",
};

console.log(updated);
console.log(person);

//arrays
const numbers = [1, 2, 3];

//adding to front
const addedFront = [4, ...numbers];
//adding to back
const addedBack = [...numbers, 4];
//adding wherever
const index = numbers.indexOf(2);
const added = [...numbers.slice(0, index), 4, ...numbers.slice(index)];
console.log(added);
//removing wherever
const removed = numbers.filter((n) => n !== 2);
console.log("removed", removed);
//updating
const updatedNumber = numbers.map((n) => (n === 2 ? 20 : n));
console.log(updatedNumber);

//enforcing Immutablity
//libraries immutable

let book = Map({ title: "Harry Potter" });

function publish(book) {
  return book.set("isPublished", true);
}

book = publish(book);

console.log(book.toJS());

//libraries immer

let book2 = { title: "breask" };

function publish2(book) {
  return produce(book, (draftBook) => {
    draftBook.isPublished = true;
  });
}

let updatedBook = publish2(book2);
console.log(book2);
console.log(updatedBook);
