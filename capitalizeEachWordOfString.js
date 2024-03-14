// Write a JavaScript program to convert a string to title case
//  (capitalize the first letter of each word).

function capitalizeEachWordOfString(string) {
   const newString = string.replace(/\b\w/g, (l) => l.toUpperCase());
   console.log(newString);
   console.log(JSON.stringify(newString));
}

capitalizeEachWordOfString("hello shubham what are you doing?");
