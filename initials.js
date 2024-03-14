function getInitialsOfName(name) {
   let res = name.split(" ");
   return `${res[0][0]}.${res[1][0]}`;
}

let answer = getInitialsOfName("shubham sharma");
console.log(answer.toUpperCase());
