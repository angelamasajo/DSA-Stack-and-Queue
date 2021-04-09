const _Node = require('../Checkpoint/StackNode')

class Stack {
  constructor() {
    this.top = null
  }

  push(data) {
    if (this.top === null) {
      this.top = new _Node(data, null)    
      return this.top
    }
    const node = new _Node(data, this.top)
    this.top = node
  }

  pop() {
    const node = this.top
    this.top = node.next
    return node.data
  }

}

// function display(stack) {
//   let currNode = stack.top
//   if (stack.top === null) {
//     return null
//   }
//   while (currNode.next !== null) {
//     console.log(currNode.data)
//     currNode = currNode.next
//   }
//   return currNode.data
// } 

// console.log(display())

// function peek(stack) {

// }

// function isEmpty() {

// }