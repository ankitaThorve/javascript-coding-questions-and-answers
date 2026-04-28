// ---Write a Program to find a sum of an array?
// The sumArray function takes an array arr as input and initializes a variable sum to 0. It loops through each element of the array, adding each element's value to sum. Finally, it returns the total sum which is 33.

function sumArray(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

console.log(sumArray([1,2,3,4,5]))
console.log(sumArray([100,72,36,4,15]))