function highAndLow(numbers) {
  const numberInArray = numbers.split(" ");
  console.log(numberInArray)
  let Low;
  let Hight;
  numberInArray.forEach((number) => {
    if (Low === undefined && Hight === undefined) {
      Low = number;
      Hight = number;
    }

    if (Number(number) >= Hight) {
      Hight = number;
    }
    if (Number(number) <= Low) {
      Low = number;
    }
  });
  return `${Hight} ${Low}`;
}

console.log(highAndLow("9 4 3 -45 4 93")); //, "42 3"
