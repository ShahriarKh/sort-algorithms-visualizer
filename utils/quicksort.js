import { timer } from "./shared";

function quickSort(array) {
  // Base case: arrays with 0 or 1 element are already sorted
  if (array.length <= 1) {
    return array;
  }

  // Choose a pivot element
  const pivot = array[Math.floor(array.length / 2)];

  // Partition the array into two sub-arrays: elements less than the pivot and elements greater than the pivot
  const left = [];
  const middle = [];
  const right = [];
  for (let element of array) {
    if (element < pivot) {
      left.push(element);
    } else if (element > pivot) {
      right.push(element);
    } else {
      middle.push(element);
    }
  }

  // Recursively sort the sub-arrays
  const sortedLeft = quickSort(left);
  const sortedRight = quickSort(right);

  // Concatenate the sorted sub-arrays with the pivot in the middle
  const sortedArray = sortedLeft.concat(middle, sortedRight);

  // Log the updated array
  console.log(sortedArray);

  // Return the sorted array
  return sortedArray;
}

// Example usage
const array = [8, 3, 1, 9, 4, 5, 7, 6, 2, 12, 10, 11];
quickSort(array);
