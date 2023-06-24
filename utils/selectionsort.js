import { timer } from "./shared";

export async function selectionSort(numbers, setNumbers, setIsSorting) {
  let iterationTime = 100;
  setIsSorting(true);

  async function task() {
    await timer(iterationTime);
    setNumbers([...numbers]);
  }

  let len = numbers.length;

  for (let i = 0; i < len - 1; i++) {
    let minIndex = i;

    for (let j = i + 1; j < len; j++) {
      if (numbers[j] < numbers[minIndex]) {
        minIndex = j;
      }
    }

    if (minIndex !== i) {
      // Swap the elements
      let temp = numbers[i];
      numbers[i] = numbers[minIndex];
      numbers[minIndex] = temp;
    }

    await task();
  }

  setIsSorting(false);
  return numbers;
}
