import { timer } from "./shared";

export async function bubbleSort(numbers, setNumbers, setIsSorting) {
  // let iterationTime = Math.max(150, numbers.length / 30000);
  let iterationTime = 5;
  setIsSorting(true);

  async function task() {
    await timer(iterationTime);
    setNumbers([...numbers]);
  }

  let len = numbers.length;

  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len - i - 1; j++) {
      if (numbers[j] > numbers[j + 1]) {
        let temp = numbers[j];
        numbers[j] = numbers[j + 1];
        numbers[j + 1] = temp;
        await task();
      }
    }
  }
  setIsSorting(false);
  return numbers;
}
