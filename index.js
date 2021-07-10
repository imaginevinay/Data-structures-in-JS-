//  lists DS implementation in JS

function List() {
  this.listSize = 0;
  this.pos = 0;
  this.dataStore = [];
  this.append = append;
  this.find = find;
  this.toString = toString;
  this.remove = remove;
  this.clear = clear;
  this.insert = insert;
  this.front = front;
  this.end = end;
  this.prev = prev;
  this.next = next;
  this.length = length;
  this.currPos = currPos;
  this.moveTo = moveTo;
  this.getElement = getElement;
  this.contains = find;
}

// append item to list
function append(element) {
  this.dataStore[this.listSize++] = element;
}

// find element in list
function find(element) {
  return this.dataStore.indexOf(element);
}

// remove item from list
function remove(element) {
  let foundAt = this.find(element);
  if(foundAt > -1) {
    this.dataStore.splice(foundAt, 1);
    --this.listSize
    return true
  }
  return false;
}

// get list elements
function toString() {
  return this.dataStore;
}

//insert
function insert(element, after) {
  let afterIndex = this.find(after);
  if(afterIndex > -1) {
    this.dataStore.splice(afterIndex+1, 0, element);
    this.listSize++;
    return true;
  }
  return false;
}

// clear
function clear() {
  delete this.dataStore;
  this.dataStore = [];
  this.listSize = this.pos = 0;
}

//traversing a list
function front() {
  this.pos = 0;
}

function end() {
  this.pos = this.listSize - 1
}

function prev() {
  if(this.pos > 0) {
    --this.pos;
  }
}

function next() {
  if(this.pos < this.listSize-1) {
    ++this.pos;
  }
}

function currPos() {
  return this.pos;
}

function moveTo(position) {
  this.pos = position
}

function getElement() {
  return this.dataStore[this.pos]
}

// get length of list or listSize
function length() {
  return this.listSize;
}

function print(item) {
  console.log(item)
}



var names = new List();
names.append("Clayton");
names.append("Raymond");
names.append("Cynthia");
names.append("Jennifer");
names.append("Bryan");
names.append("Danny");
// iterator using list DS
for(names.front(); names.currPos() < names.length(); names.next()) {
  console.log(names.currPos())
  console.log(names.getElement())
}

for(names.end(); names.currPos() >= 0; names.prev()) {
 print(names.getElement());
}


