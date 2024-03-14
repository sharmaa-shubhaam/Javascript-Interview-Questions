function* yieldfunction() {
   yield "hello shubham";
   yield 100;
}

console.log(yieldfunction().next().value);

let object = [
   {
      name: "shubham",
      age: 30,
      class: "2",
   },
   {
      name: "sharma",
      age: 23,
      class: "web developer",
   },
];
console.table(object);
