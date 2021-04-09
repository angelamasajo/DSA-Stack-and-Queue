const _Node = require('./QueueNode')

class Queue {
  constructor() {
    this.first = null
    this.last = null
  }


  // O(1) - adding items only at 1 place
  enqueue(data) {
    const node = new _Node(data)
    if (this.first === null) {
      this.first = node
    }
    if (this.last) {
      this.last.next = node
    }

    // make new node the last item on the queue
    this.last = node
  }

  // O(1) - removing items from only 1 place
  dequeue() {
    // if the queue is empty, nothing to return
    if (this.first === null) {
      return
    }
    const node = this.first
    this.first = this.first.next
    // if this is the last item in queue
    if (node === this.last) {
      this.last = null
    }
    return node.value
  }

}