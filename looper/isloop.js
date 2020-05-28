'use strict';

//Complete this algo
const isLoop = (linkedlist) => {
  let node = linkedlist.head;
  const nodeArray = [];

  while (node) {
    if (nodeArray.includes(node.value)) return true;
    else {
      nodeArray.push(node.value);
    }
    node = node.next;
  }
  return false;
};

//Sudo Code
/* 
    1. Traverse thru each of the nodes in LL
    2. While traversing, check if node.value exists in array, using Array.includes
    3. If not, add into array
        - if yes, return true
    4. If LL ends in null, then return false

*/

/*
EXTRA CREDIT:

Write a function findLoop() that consumes a linkedlist with a loop
This function should return the Node value the loop begins at
Remember to write some test specs too!

*/
module.exports = isLoop;
