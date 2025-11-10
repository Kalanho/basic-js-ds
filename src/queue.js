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
    this.head = null; // front of the queue
    this.tail = null; // back of the queue
    this.length = 0;
  }

  getUnderlyingList() {
    return this.head;
  }

  enqueue(value) {
    const newNode = new ListNode(value);
    
    if (this.tail === null) {
      // Queue is empty, both head and tail point to new node
      this.head = newNode;
      this.tail = newNode;
    } else {
      // Add to the end and update tail
      this.tail.next = newNode;
      this.tail = newNode;
    }
    
    this.length++;
  }

  dequeue() {
    if (this.head === null) {
      return undefined; // or throw an error, depending on requirements
    }
    
    const dequeuedValue = this.head.value;
    this.head = this.head.next;
    
    // If head becomes null, queue is empty, so tail should also be null
    if (this.head === null) {
      this.tail = null;
    }
    
    this.length--;
    return dequeuedValue;
  }
}


module.exports = {
  Queue
};
