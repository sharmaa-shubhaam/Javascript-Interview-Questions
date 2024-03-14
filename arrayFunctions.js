let arr = [2, 8, 6, 3, 8, 2, 55, 6, 99];

let ans = arr.reduce((cur, val) => (cur += val));

let filter = arr.filter((value) => value > 15);

function recussion(num) {
   if (num === 1) return 1;

   console.log(num);
   return recussion(num - 1);
}

recussion(5);
