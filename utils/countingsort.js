import { timer } from "./shared";

export async function countingSort(numbers, setNumbers, setIsSorting) {
  // let iterationTime = Math.max(1000, numbers.length / 30000);
  let iterationTime = 50;

  setIsSorting(true);

  async function task() {
    await timer(iterationTime);
    setNumbers([...numbers]);
  }

  let min = Math.min(...numbers);
  let max = Math.max(...numbers);
  let count = new Array(max - min + 1).fill(0);

  for (let num of numbers) {
    count[num - min]++;
  }

  let sortedIndex = 0;
  for (let i = 0; i < count.length; i++) {
    while (count[i] > 0) {
      numbers[sortedIndex] = i + min;
      sortedIndex++;
      count[i]--;
      await task();
    }
  }
  setIsSorting(false);
  return numbers;
}
