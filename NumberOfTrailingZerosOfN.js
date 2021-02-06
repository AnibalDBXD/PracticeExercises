/*
Write a program that will calculate the number
of trailing zeros in a factorial of a given number.

N! = 1 * 2 * 3 * ... * N
*/
function toFixed(x) {
    if (Math.abs(x) < 1.0) {
      var e = parseInt(x.toString().split('e-')[1]);
      if (e) {
          x *= Math.pow(10,e-1);
          x = '0.' + (new Array(e)).join('0') + x.toString().substring(2);
      }
    } else {
      var e = parseInt(x.toString().split('+')[1]);
      if (e > 20) {
          e -= 20;
          x /= Math.pow(10,e);
          x += (new Array(e+1)).join('0');
      }
    }
    return x;
}

function factorial(n) {
    const reducer = (accumulator, currentValue) => accumulator * currentValue;
    let arrayResult = []
    for (let i = 0; i < n; i++) {
        arrayResult[i] = i + 1
    }
    return arrayResult.reduce(reducer)
}

function zeros (n) {
    if(n === 0) return 0;
    const number = toFixed(factorial(n))
    console.log(number)
    let Counter = 0;
    for (let i = number.length - 1; i > -1; i--) {
        if(number[i] === "0"){
            Counter++;
        }else{
            break;
        }
    }
    console.log(Counter)
    return Counter;
}

zeros(100)