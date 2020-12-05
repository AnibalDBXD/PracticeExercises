//Fibonacci with memo

let memo = [];

const Fibonacci = (n, memo) => {
  if (memo[n] !== undefined) return memo[n];
  if (n <= 1) {
    memo[n] = n;
    return n;
  } else {
    let result = Fibonacci(n - 1, memo[n]) + Fibonacci(n - 2, memo[n]);
    memo[n] = result;
    return result;
  }
};

console.log(Fibonacci(5, memo));

//Fibonacci Linear

const FibonacciLinear = (n) => {
  let memo = [0, 1];
  for (let actual = 2; actual <= n; ++actual) {
    memo[actual] = memo[actual - 2] + memo[actual - 1];
  }
  return memo[n];
};
