// ---Find the largest number in an array in JavaScript.
// Using a For loop:
// The code defines a function findLargest that finds the largest number in an array. It starts by assuming the first element is the largest, then iterates through the array. If a larger number is found, it updates the largest value. Finally, it returns the largest number which is 100.

function findLargest(arr) {
  //Suppose first element is the largest
  let largest = arr[0];
  for (let index = 0; index < arr.length; index++) {
    if (arr[index] > largest) {
      largest = arr[index];
    }
  }
  return largest;
}

console.log(findLargest([99, 5, 3, 100, 1])); //100
console.log(findLargest([99, 5, 3, 100, 125])); //125
