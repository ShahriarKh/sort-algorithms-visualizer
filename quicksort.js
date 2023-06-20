import { timer } from "./utils/shared";

function partition(arr, left, right) {
  const pivotIndex = Math.floor((left + right) / 2);
  const pivotValue = arr[pivotIndex];
  swap(arr, pivotIndex, right);
  let storeIndex = left;
  for (let i = left; i < right; i++) {
    if (arr[i] < pivotValue) {
      swap(arr, i, storeIndex);
      storeIndex++;
    }
  }
  swap(arr, storeIndex, right);
  return storeIndex;
}

function swap(arr, i, j) {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

export async function quickSort(numbers, setNumbers, setIsSorting, left = 0, right = numbers.length - 1) {
  if (left < right) {
    const pivotIndex = partition(arr, left, right);
    console.log(`Pivot element: ${arr[pivotIndex]}`);
    console.log(`Left sub-array: ${arr.slice(left, pivotIndex)}`);
    console.log(`Right sub-array: ${arr.slice(pivotIndex + 1, right + 1)}`);
    quickSort(arr, left, pivotIndex - 1);
    quickSort(arr, pivotIndex + 1, right);
  }
  return arr;
  // let iterationTime = 50;

  // async function task() {
  //   await timer(iterationTime);
  //   setNumbers([...sortedArray]);
  // }

  // setIsSorting(true);

  // if (numbers.length <= 1) {
  //   return numbers;
  // }

  // const pivot = numbers[Math.floor(numbers.length / 2)];

  // const left = [];
  // const middle = [];
  // const right = [];
  // for (let element of numbers) {
  //   if (element < pivot) {
  //     left.push(element);
  //   } else if (element > pivot) {
  //     right.push(element);
  //   } else {
  //     middle.push(element);
  //   }
  // }

  // const sortedLeft = quickSort(left);
  // const sortedRight = quickSort(right);

  // const sortedArray = sortedLeft.concat(middle, sortedRight);

  // await task();

  // // setIsSorting(false);
  // return sortedArray;
}
