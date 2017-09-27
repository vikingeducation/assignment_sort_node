class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
    this.prev = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  add(data) {
    let node = new Node(data);
    node.next = this.head;
    if (this.head) {
      this.head.prev = node;
    } else {
      this.tail = node;
    }
    this.head = node;
    this.length++;
  }

  append(data) {
    let node = new Node(data);
    node.prev = this.tail;
    if (this.tail) {
      this.tail.next = node;
    } else {
      this.tail = node;
    }
    this.tail = node;
    this.length++;
  }

  pop() {
    if (this.tail) {
      const data = this.tail.data;
      this.tail = this.tail.prev;
      if (this.tail) {
        this.tail.next = null;
      } else {
        this.head = this.tail;
      }
      this.length--;
      return data;
    }
    return null;
  }

  shift() {
    if (this.head) {
      const data = this.head.data;
      this.head = this.head.next;
      if (this.head) {
        this.head.prev = null;
      } else {
        this.tail = this.head;
      }
      this.length--;
      return data;
    }
    return null;
  }
}

module.exports = LinkedList;
