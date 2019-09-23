const Node = require('./node');

class Linked_list {
  constructor() {
    this.length = 0;
    this._head = null;
    this._tail = null;
    this._list = [];
  }

  append(data) {
    if (this._head === null && this._tail === null) {
      this._head = new Node(data);
      this._tail = new Node(data);
      this.length++;
      this._list.push(data);
      return this;
    }
    this._tail = new Node(data);
    this.length++;
    this._list.push(data);
    return this;
  }

  head() {
    return this._head !== null ? this._head.data : null;
  }

  tail() {
    return this._tail !== null ? this._tail.data : null;
  }

  at(index) {
    return this._list[index];
  }

  insertAt(index, data) {
    this._list.splice(index, 0, data);
    return this;
  }

  isEmpty() {
    return this.length === 0;
  }

  clear() {
    this._head = null;
    this._tail = null;
    this.length = 0;
    this._list = [];
    return this;
  }

  deleteAt(index) {
    this._list.splice(index, 1);
    return this;
  }

  reverse() {
    const tempNode = this._head;
    this._head = this._tail;
    this._tail = tempNode;
    this._list.reverse();
    return this;
  }

  indexOf(data) {
    return this._list.indexOf(data);
  }
}

module.exports = Linked_list;
