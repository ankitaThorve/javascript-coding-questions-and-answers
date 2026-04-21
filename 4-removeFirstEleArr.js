//---How Remove the first element from an array in JavaScript?
// The code initializes an array arr with values [5, 6, 7]. The slice(1) method creates a new array, excluding the first element (5), resulting in [6, 7]. Finally, console.log(arr) outputs the modified array [6, 7] to the console.

//Initialize an array
let arr = [5, 6, 7];
arr = arr.slice(1);
//Create a new array without first element
console.log(arr);
