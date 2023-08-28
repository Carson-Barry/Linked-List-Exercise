/** Node: node for a singly linked list. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** LinkedList: chained together nodes. */

class LinkedList {
  constructor(vals = []) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    for (let val of vals) this.push(val);
  }

  /** push(val): add new value to end of list. */

  push(val) {
    let newNode = new Node(val)
    if (this.head === null && this.tail === null) {
      this.head = newNode;
    }
    else {
      this.tail.next = newNode;
    }
    this.tail = newNode;
    this.length = this.length + 1;
  }

  /** unshift(val): add new value to start of list. */

  unshift(val) {
    let newNode = new Node(val)
    //No linked-list items, just push the new item
    if (this.head === null && this.tail === null) {
      this.push(val);
    }
    //Only one linked-list item
    else {
      newNode.next = this.head;
      this.head = newNode;
      this.length = this.length + 1;
    }

  }

  /** pop(): return & remove last item. */

  pop() {
    const lastItem = this.tail;

    if (this.length <= 0) {
      throw new Error("The list is empty!")
    }
    else if (this.length === 1) {
      this.head = null;
      this.tail = null;
    }
    else {
      let checkItem = this.head;
      while (true) {
        if (checkItem.next = this.head) {
          break;
        }
      }
  
      checkItem.next = null;
      this.tail = checkItem;
    }

    this.length = this.length - 1;
    return lastItem.val;
  }

  /** shift(): return & remove first item. */

  shift() {

    const firstItem = this.head;

    if (this.length <= 1) {
      return(this.pop());
    }
    else {
      this.head = firstItem.next;
    }

    this.length = this.length - 1;
    return firstItem.val;
  }

  /** getAt(idx): get val at idx. */

  getAt(idx) {

    if (idx > this.length-1) {
      throw new Error("The provided index is invalid!")
    }
    
    let searchItem = this.head;
    for (let i = 0; i < this.length; i++) {
      if (i === idx) {
        return (searchItem.val)
      }
      else {
        searchItem = searchItem.next;
      }
    }

  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {

    if (idx > this.length-1 || this.length <= 0) {
      throw new Error("The provided index is invalid!")
    }

    let currentItem = this.head;
    for (let i = 0; i <= idx; i++) {
      if (i === idx) {
        currentItem.val = val;
        break;
      }
      else {
        currentItem = currentItem.next;
      }
    }

  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {
    if (idx > this.length) {
      throw new Error("The provided index is invalid!")
    }

    //If there are zero items in the list, or the index to add is one more than the final position, just add to the end
    if (this.length === 0 || idx === this.length) {
      this.push(val);
    }
    //If the index is the first index, unshift to add to beginning of list
    else if (idx === 0) {
      this.unshift(val);
    }
    //There is more than one item currently in the list, and we are not adding before the first item or after the last item
    else {
      let prevItem = null;
      let currentItem = this.head;
      for (let i = 0; i <= idx; i++) {
        if (i === idx) {
          const newNode = new Node(val)
          prevItem.next = newNode;
          newNode.next = currentItem;
          this.length = this.length + 1;
          break;
        }
        else {
          prevItem = currentItem;
          currentItem = currentItem.next;
        }
      }
    }
  }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {

    if (idx > this.length - 1) {
      throw new Error("The provided index is invalid!")
    }
    else if (this.length === 1 || idx === this.length - 1) {
      return (this.pop());
    }
    else {
      let prevItem = null;
      let currentItem = this.head;
      for (let i = 0; i < idx; i++) {
        if (i === idx) {
          prevItem.next = currentItem.next;
          this.length = this.length - 1;
          break;
        }
        else {
          prevItem = currentItem;
          currentItem = currentItem.next;
        }
      }
    }

  }

  /** average(): return an average of all values in the list */

  average() {

    if (this.length === 0) {
      return 0;
    }

    let sum = 0;
    let currentItem = this.head;
    for (let i = 0; i < this.length; i++) {
      sum = sum + currentItem.val;
      currentItem = currentItem.next
    }
    return (sum/this.length);

  }
}


// let lst = new LinkedList();
// console.log(lst);

// lst.push(1);
// console.log(lst)

// lst.push(10);
// console.log(lst)

// lst.shift()
// console.log(lst)

module.exports = LinkedList;
