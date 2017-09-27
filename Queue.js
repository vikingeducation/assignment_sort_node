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
