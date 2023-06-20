import { timer } from "./shared";

export async function insertionSort(numbers, setNumbers, setIsSorting) {
  let iterationTime = 50;

  setIsSorting(true);

  async function task() {
    await timer(iterationTime);
    setNumbers([...numbers]);
  }

  for (let i = 1; i < numbers.length; i++) {
    let current = numbers[i];
    let j = i - 1;

    while (j >= 0 && numbers[j] > current) {
      numbers[j + 1] = numbers[j];
      j--;
    }

    numbers[j + 1] = current;
    await task();
  }

  setIsSorting(false);
  return numbers;
}
