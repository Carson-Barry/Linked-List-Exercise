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
    
  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {

  }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {

  }

  /** average(): return an average of all values in the list */

  average() {
    
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
