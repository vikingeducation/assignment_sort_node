const LinkedList = require("./LinkedList");

class Queue {
  constructor() {
    this.items = new LinkedList();
    this.length = 0;
  }

  enqueue(item) {
    this.items.add(item);
    this.length++;
  }

  dequeue() {
    this.length--;
    return this.items.pop();
  }
}

module.exports = Queue;

const queue = new Queue();

queue.enqueue(1);
queue.enqueue(3);
queue.enqueue(6);
queue.enqueue(121);

console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());

queue.enqueue(1);
queue.enqueue(3);
queue.enqueue(6);

console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
