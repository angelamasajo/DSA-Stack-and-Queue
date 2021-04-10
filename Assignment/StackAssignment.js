const _Node = require('../Checkpoint/StackNode')

class Stack {
  // example: undo button functionality
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

function main() {
  const char = new Stack
  char.push('Kirk')
  char.push('Spock')
  char.push('McCoy')
  char.push('Scotty')
  // drink.pop()
  // drink.pop()
  // drink.pop()
  // drink.pop()

  return char
}

const stack = main()
console.log('STACK', stack)

function peek(stack) {
  if (stack.top === null) {
    return null
  }
  return stack.top.data
}

console.log('peek', peek(stack))


function isEmpty() {
  if (stack.top === null) {
    return true
  }
  return false
}

console.log('Is it empty?', isEmpty(stack))


function display(stack) {
  let currNode = stack.top
  if (stack.top === null) {
    return null
  }
  while (currNode.next !== null) {
    console.log(currNode.data)
    currNode = currNode.next
  }
  return currNode.data
} 

console.log(display(stack))


// =============================================================


function is_palindrome(s) {
  s = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
  let reverse = new Stack()
  for (let i = 0; i < s.length; i++) {
    reverse.push(s.charAt(i))
  }
  for (let j = 0; j < s.length; j++) {
    if (s[j] === reverse.pop()) continue 
    else return false
  }
  return true
}
// True, true, true, false
console.log(is_palindrome("dad"));
console.log(is_palindrome("A man, a plan, a canal: Panama"));
console.log(is_palindrome("1001"));
console.log(is_palindrome("Tauhida"));


// =============================================================


function parentheses(str) {
  const newStack = new Stack();
  for(let i = 0; i < newStack.length; i++) {
    if(str[i] === '(' || str[i] === '[' || str[i] === '{') {
      newStack.push(str[i]);
    }
    if(str[i] === ')' || str[i] === ']' || str[i] === '}') {
      if(peek(newStack) === '(' && str[i] === ')')
      newStack.pop()
    }
    if(str[i] === ')' || str[i] === ']' || str[i] === '}') {
      if(peek(newStack) === '[' && str[i] === ']')
      newStack.pop()
    }
    if(str[i] === ')' || str[i] === ']' || str[i] === '}') {
      if(peek(newStack) === '{' && str[i] === '}')
      newStack.pop()
    }
  }  
  if(!newStack) {
      return false
  } else {
      return true
  }
}
console.log(parentheses('(([[()'))


// =============================================================


// not working
function sortStack(input, tempStack = null, temp = null) {
  if (tempStack === null) {
    tempStack = new Stack()
  }
  if (input.top === null) {
    input = tempStack
    return input
  }
  temp = input.pop()
  if (tempStack.top === null || temp < tempStack.top.data) {
    return sortStack(input, tempStack)
  }
  else {
    while (tempStack.top !== null && temp > tempStack.top.top) {
      input.push(tempStack.pop())
    }
    tempStack.push(temp)
    return sortStack(input, tempStack)
  }
}



const testStack = new Stack()
  testStack.push(4)
  testStack.push(1)
  testStack.push(54)
  testStack.push(592)
  testStack.push(3231)
  const sorted = sortStack(testStack, tempStack = null, temp = null)
  const displayStack = display(sorted)
  console.log('display', sorted)



module.exports = Stack