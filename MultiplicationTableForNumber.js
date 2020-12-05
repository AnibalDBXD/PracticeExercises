/* 
Your goal is to return multiplication table for number that is always an integer from 1 to 10.

For example, a multiplication table (string) for number == 5 looks like below:
*/

function multiTable(number) {
  let table = "";
  for (let i = 1; i <= 10; i++) {
    table += `${i} * ${number} = ${i * number}`;
    if (i !== 10) table += "\n";
  }
  return table;
}
console.log(multiTable(5));
/*
1 * 5 = 5
\n
2 * 5 = 10
\n
3 * 5 = 15
\n
4 * 5 = 20
\n
5 * 5 = 25
\n
6 * 5 = 30
\n
7 * 5 = 35
\n
8 * 5 = 40
\n
9 * 5 = 45
\n
10 * 5 = 50'
*/
