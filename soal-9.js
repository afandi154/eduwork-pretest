//find Highest number
let Numbers = [4, 2, 6, 88, 3, 11];
let l = Numbers.length;
let max1 = -Infinity;
for (let i = 0; l > i; i++) {
  if (Numbers[i] > max1) {
    max1 = Numbers[i];
  }
}
console.log("Max : " + max1);

//find lowest number
let max2 = Infinity;
for (let i = 0; l > i; i++) {
  if (Numbers[i] < max2) {
    max2 = Numbers[i];
  }
}
console.log("Min : " + max2);