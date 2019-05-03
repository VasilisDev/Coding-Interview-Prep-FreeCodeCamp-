/**
 * ============  Multiples of 3 and 5 ==================
 *
 * If we list all the natural numbers below 10 that are multiples of 3 or 5,
 * we get 3, 5, 6 and 9. The sum of these multiples is 23.
 * Find the sum of all the multiples of 3 or 5 below the provided parameter value number.
 *
 *
 */


function multiplesOf3and5(number) {
  return Array.from(Array(number).keys())
  .filter(i => i % 3 === 0 || i % 5 === 0)
  .reduce((acc, i) => acc + i);
}

console.log(multiplesOf3and5(1000)); //  ==> 233168
