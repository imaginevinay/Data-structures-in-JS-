function Node(val) {
    this.value = val;
    this.next = null;
}

function linkedList() {
    this.head = null;
    this.find = find;
    this.insert = insert;
    this.display = display;
}

function find(val) {
    let current = this.head;
    if(current === null) {
        return null;
    }
    
    while(current.value !== val) {
        current = current.next;
    }
    return current;
}

function insert(val, item){
    let newNode = new Node(val);
    let current = this.find(item);
    newNode.next = current.next;
    current.next = newNode;
}