function occupyParking(parkingSpaces, yesterday, today) {
  let count = 0;
  for (let i = 0; i < parkingSpaces; i++) {
    if (yesterday[i] === "C" && today[i] === "C") {
      count++;
    }
  }
  return count;
}
//1. Input # of parking spaces, input what parking spaces were occupied and empty (C...CC, C.CCCC, etc)
//2. For each letter in 2nd and 3rd input
//3. Compare each letter based on the position of the inputs (C.C, CC. -> 1)
//4. Return the results

console.log(occupyParking(5, "C..CC", ".C.CC"));
