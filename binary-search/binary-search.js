"use strict";

// Complete this algo
const binarySearch = (array, target) => {
  let L = 0;
  let H = array.length - 1;
  let M = Math.ceil(array.length / 2);
  if (array[M] === target || array[L] === target || array[H] === target) {
    return true;
  } else if (array[M] > target) {
    const leftHalf = array.slice(L, M);
    return binarySearch(leftHalf, target);
  } else if (array[M] < target) {
    const rightHalf = array.slice(M);
    return binarySearch(rightHalf, target);
  }
  return false;
};

/*
	EXTRA CREDIT:

	Can you augment the function above to run in constant O(1) space?
	This means, you cannot edit/copy the original array!
	How can we use other pieces of data, like pointers, to avoid slicing?

*/

module.exports = binarySearch;

// Psudo Code
/*
	---
	Simple solution:

	Loop through the array and if check if any of the elements match the targeted number return true

	if not return false
	---

	Solution:
	1. Checking to see if the target number is bigger than the middle number
	2. If middle number is less than target number use the left half of the array
		else use the right half
	1. Divide array by the half that we want
	4. Repeat steps 1-3 until we find our number


*/
