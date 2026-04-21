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
console.log(`Using for loop: ${findLargest([99, 5, 3, 100, 125])}`); //125

//Using the spread operator (...) or Math.max:
// The findLargest function uses Math.max() to find the largest number in an array. The spread operator (...arr) expands the array elements so Math.max() can evaluate each value. In the given code, it returns 100, the largest number from [99, 5, 3, 100, 1].

function largNum(arr) {
  return Math.max(...arr);
}

console.log(largNum([99, 100, 1, 5, 3]));
console.log(`Using Math.max() & Speard operator: ${largNum([1,55,61,71,89,102,254])}`)
