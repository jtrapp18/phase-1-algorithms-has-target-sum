function hasTargetSum(array, target) {
  // Write your algorithm here

  // const filteredArray = array.filter(val => val < target)
  const sortedArray = array.sort((a, b) => a - b);

  console.log(sortedArray)

  function checkSums(arrMod) {
    if (arrMod.length > 0) {

      // check sums for lowest 2 numbers
      const lowTwo = arrMod[0] + arrMod[1]
      if (lowTwo > target) {return false}

      // check sums for highest 2 numbers
      const highTwo = arrMod.at(-1) + arrMod.at(-2)
      if (highTwo < target) {return false}

      // check sums for outer-most values
      const outerSum = arrMod[0] + arrMod.at(-1)

      if (outerSum === target) {
        return true
      }
      else if (outerSum < target) {
        const arrDropFirst = arrMod.slice(1)
        return checkSums(arrDropFirst)
      }
      else {
        const arrDropLast = arrMod.slice(0, -1)
        return checkSums(arrDropLast)
      }}
    else {
      return false
    }
  }

  return checkSums(sortedArray)
}

/* 
  Write the Big O time complexity of your function here
  O(n)
*/

/* 
  Add your pseudocode here

  filteredArray = array.filter(number < target)
  sortedArray = filteredArray.sort()
  
  if sum(highest 2 numbers) < target:
    return false
  
  if sum(lowest 2 numbers) > target:
    return false
  
  for numbers in array:
    if sum(low, high) = target:
      return true
    
      if sum(low, high) < target:
      drop lowest
    
    if sum(low, high) > target:
      drop highest 

*/

/*
  Add written explanation of your solution here
  
  (1) First, sort values from smallest to largest
  (2) First, check the sum of the 2 largest numbers
    = if the sum of the 2 largest numbers is less than the target, return false (will never be able to meet target)
  (3) Check sum of 2 smallest numbers
    - if higher than target, return false (will never meet target)
  (4) Next, check the highest and lowest number combination
    - if sum equals target, return true
    - if the sum is too low, drop the lowest number --> will never meet conditions with that value
    - if the sum is too high, drop the highest number --> will never meet conditions with that value
  (5) Repeat procedures (3-5) until one of the following conditions is met:
    - target is met
    - array is empty

*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
