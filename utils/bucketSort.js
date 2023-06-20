import { timer } from "./shared";

export async function bucketSort(numbers, setNumbers, setIsSorting) {
  let iterationTime = Math.max(150, numbers.length / 30000);

  async function task() {
    await timer(iterationTime);
    setNumbers([...sortedNumbers]);
  }

  setIsSorting(true);

  let maxVal = Math.max(...numbers);
  let bucket = Array.from({ length: maxVal + 1 }, () => []);

  for (let i = 0; i < numbers.length; i++) {
    let value = numbers[i];
    bucket[value].push(value);
  }

  let sortedNumbers = [];

  for (let j = 0; j < bucket.length; j++) {
    if (bucket[j].length > 0) {
      sortedNumbers = sortedNumbers.concat(bucket[j]);
    }
    await task(sortedNumbers);
    console.log(sortedNumbers); // Log the updated numbersay after each iteration
  }

  setIsSorting(false);
  return sortedNumbers;
}
