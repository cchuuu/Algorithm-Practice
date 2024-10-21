function factorsOfN(N) {
  for (let i = 1; i <= N; i++) {
    if (N % i === 0);
  }
  return i;
}

function factorial(N) {
  if (N <= 0) {
    return "negative number or 0";
  }
  let number = 1;
  for (let i = 1; i <= N; i++) {
    //i starts at 1, then adds up to N by 1
    number *= i;
  }
  return number;
}
console.log(factorial(-1));
