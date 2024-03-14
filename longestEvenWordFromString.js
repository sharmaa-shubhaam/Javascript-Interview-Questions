// create a function to find longest even length word from a string.
// if there is no even word than return '00'

function longestEvenWordFromString(string) {
   let defaultReturnValue = "00";
   let longestString = "";

   for (const text of string.split(" ")) {
      if (text.length % 2 == 0) {
         if (longestString.length < text.length) {
            longestString = text;
         }
      }
   }

   return longestString || defaultReturnValue;
}

const result = longestEvenWordFromString("hello worlds");
console.log(result);
