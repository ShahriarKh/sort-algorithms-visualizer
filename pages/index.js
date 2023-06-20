import Head from "next/head";
import css from "@/styles/Home.module.css";
import { useEffect, useState } from "react";
import { bubbleSort } from "@/utils/bubblesort";

export default function Home() {
  function generateRandomNumbers() {
    return [...Array(quantity)].map((_) => Math.ceil(Math.random() * quantity));
  }

  const [isSorting, setIsSorting] = useState(false);
  const [quantity, setQuantity] = useState(12);
  const [numbers, setNumbers] = useState(generateRandomNumbers(12));

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className={css.display}>
          {numbers.map((number, index) => {
            return (
              <div
                key={index}
                className={css.number}
                style={{
                  height: `${number * 20}px`,
                  background: `linear-gradient(to top right, hsl(${
                    (number * 360) / Math.max(...numbers)
                  }, 80%, 50%), hsl(${(number * 360) / Math.max(...numbers) + 15}, 70%, 50%))`,
                }}
              >
                {number}
              </div>
            );
          })}
        </div>
        <div className={css.buttons}>
          <button disabled={isSorting} onClick={() => bubbleSort(numbers, setNumbers, setIsSorting)}>
            Bubble sort
          </button>
          <button disabled={isSorting} onClick={() => setNumbers(generateRandomNumbers)}>
            Generate random numbers
          </button>
          <button disabled={isSorting}>Bucket sort</button>
          <button disabled={isSorting}>Merge sort</button>
          <button disabled={isSorting}>Quick sort</button>
          <button disabled={isSorting}>Selection sort</button>
        </div>
      </main>
    </>
  );
}
