const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */
class Stack {
  arr = []
  push(element) {
    this.arr.push(element);
    console.log(this.arr)
    return this.arr;
  }

  pop() {
    let k = this.arr[this.arr.length - 1];
    this.arr.pop();
    console.log(this.arr)
    return k;

  }

  peek() {
    let newArr = this.arr;
    return newArr[newArr.length -1]
 
  }
}

module.exports = {
  Stack
};
