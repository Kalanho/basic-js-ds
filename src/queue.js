const { NotImplementedError } = require('../lib/errors');
// const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  constructor() {
    this.head = null; // points to the front of the queue
    this.tail = null; // points to the end of the queue
  }

  getUnderlyingList() {
    // Return the linked list starting from the head
    return this.head;
  }

  enqueue(value) {
    const newNode = new ListNode(value);
    if (!this.head) {
      // If queue is empty, new node becomes head and tail
      this.head = newNode;
      this.tail = newNode;
    } else {
      // Append to the end and update tail
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }

  dequeue() {
    if (!this.head) {
      // Queue is empty
      return null;
    }
    const value = this.head.value;
    this.head = this.head.next;
    if (!this.head) {
      // If the queue becomes empty, reset tail
      this.tail = null;
    }
    return value;
  }
}

module.exports = {
  Queue
};
