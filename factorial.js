const memo = [];

function memoFactorial(n) {
  if (n === 1) {
    return 1;
  } else if (memo[n]) {
    console.log(
      `memoFactorial(${n + 1} -1 ) esta memoizado en memo[${n}] (${memo[n]})`
    );
  } else if (!memo[n]) {
    console.log(`memo[${n}] = ${n} * memoFactorial(${n} - 1);`);
    memo[n] = n * memoFactorial(n - 1);
  }
  console.log(memo[n]);
  return memo[n];
}

memoFactorial(32);
