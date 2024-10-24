//1. Input binary
//2. Let const position = length of binary
//3. From the most right of binary, multiply the number by 2
//4. Loop it so that as the code goes from right to left, the power of the number increase by 1
//5. Print the output

function binaryToDecimal(binary) {
  let decimal = 0;
  const position = binary.length;
  for (let i = 0; i < position; i++) {
    if (binary[position - i - 1] === "1") {
      decimal += Math.pow(2, i);
    }
  }
  return decimal;
}
console.log(binaryToDecimal("10001"));

function decimalToBinary(decimal) {
  let binary = 0;
  let x = decimal;
    while (x != 0) {
        x % 2 = 
    }

  }
}

//divide by 2, divide the quotient by 2 until 0, remainder = binary. 