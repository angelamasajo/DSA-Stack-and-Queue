const _Node = require('./StackNode')

class Stack {
  constructor() {
    this.top = null
  }

  push(data) {
    // if stack is empty, then node will be the top of the stack
    if (this.top === null) {
      this.top = new _Node(data, null)
      return this.top
    }
    // if stack already has something, create new node,
    // add data to new node, and have pointer point to the top
    // O(1) bc we're only adding to top of stack
    const node = new _Node(data, this.top)
    this.top = node
  }

  pop() {
    // in order to remove top of stack, you have to point to 
    // the pointer of the next item and that next item becomes
    // top of the stack
    const node = this.top
    this.top = node.next
    return node.data
  }
}