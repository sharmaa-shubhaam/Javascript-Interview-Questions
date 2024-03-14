function magicNumberSquare(sum) {
   let arr = [];

   while (arr.length !== 9) {
      arr = [...arr, Math.floor(Math.random() * 10)];
   }
}

magicNumberSquare(6);
