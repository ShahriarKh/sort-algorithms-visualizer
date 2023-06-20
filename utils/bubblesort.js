const timer = (ms) => new Promise((res) => setTimeout(res, ms));

export async function bubbleSort(numbers, setNumbers, setIsSorting) {
  setIsSorting(true);
  async function task(message) {
    await timer(300);
    console.log(message);
    setNumbers([...numbers]);
  }

  let len = numbers.length;
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len - i - 1; j++) {
      if (numbers[j] > numbers[j + 1]) {
        let temp = numbers[j];
        numbers[j] = numbers[j + 1];
        numbers[j + 1] = temp;
        await task(numbers);
      }
    }
  }
  setIsSorting(false);
  return numbers;
}
