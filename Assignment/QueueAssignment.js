const _Node = require('../Checkpoint/QueueNode')

class Queue {
  constructor() {
    this.first = null
    this.last = null
  }

  enqueue(data) {
    const node = new _Node(data)
    if (this.first === null) {
      this.first === node
    }
    if (this.last) {
      this.last.next = node
    }
    this.last = node
  }

  dequeue() {
    if (this.first === null) {
      return
    }
    const node = this.first
    this.first = this.first.next
    if (node === this.last) {
      this.last = null
    }
    return node.value
  }
}


function main() {
  const starTrekQ = new Queue
  starTrekQ.enqueue('Kirk')
  starTrekQ.enqueue('Spock')
  starTrekQ.enqueue('Uhura')
  starTrekQ.enqueue('Sulu')
  starTrekQ.enqueue('Checkov')

  return starTrekQ
}

const queue = main()
console.log('QUEUE', queue)


// =============================================================


const Q = main()

function peek(Q) {
  if (Q.first === null) {
    return null
  }
  return Q.first.data
}

console.log(peek(Q))

// =============================================================


function isEmpty() {
  if (Q.first === null) {
    return true
  }
  return false
}

console.log('Is Queue empty?', isEmpty())
// getting true even though there's something there

// =============================================================

function display(Q) {
  if (Q.first === null) {
    return console.log('Queue is empty') 
  } else if (Q.first !== null) {
    let prev = Q.first
    let current = Q.first.next
    let next = Q.first.next.next
    console.log(prev.value, current.value, next.value)
    if(next !== null)  {
        prev = next.next 
        console.log(prev.value)    
    }
  } 
}

console.log('queue', display(Q))


// =============================================================



