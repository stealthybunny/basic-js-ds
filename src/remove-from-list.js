const { NotImplementedError, ListNode } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */
// let l = [3, 1, 2, 3, 4, 5];
// let k = 3;
function removeKFromList(l, k) {
  let arr = [];
  while (l.next !== null) {

    arr.push(l.value);
    l = l.next;
  }
  arr.push(l.value);
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== k) {
      newArr.push(arr[i]);
    }
  }
  let output = convertArrayToList(newArr);
  // this is a pretty usefull function from tests:)
  function convertArrayToList(arr) {
    return arr.reverse().reduce((acc, cur) => {
      if (acc) {
        const node = new ListNode(cur);
        node.next = acc;
        return node;
      }
  
      return new ListNode(cur);
    }, null);
  }
  return output
  }
 

module.exports = {
  removeKFromList
};
