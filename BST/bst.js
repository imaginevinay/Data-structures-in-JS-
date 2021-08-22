class Node {
    constructor(data, left=null, right=null) {
        this.data = data;
        this.left = left;
        this.right = right;
    }
}

class BST {
    constructor() {
        this.root = null;
    }

    add(data) {
        const node = new Node(data);
        if(this.root === null) {
            this.root = node;
            return;
        }
        let current = this.root;
        while(true) {
            if(data < current.data) {
                if(current.left !== null) {
                    current.left = node;
                    return;
                }
                current = current.left;

            } else if (data > current.data) {
                if(current.right !== null) {
                    current.right = node;
                    return;
                }
                current = current.right

            } else {
                return;
            }
        }
    }

    findMin() {
        // always on the lefttest side of the tree;
        let current = this.root;
        while(current.left !== null) {
            current = current.left;
        }
        return current.data;
    }

    findMax() {
        let current = this.root;
        while(current.right !== null) {
            current = current.right;
        }
        return current.data;
    }

    find(data) {
        let current = this.root;
        while(data !== current.data) {
            if(data < current.data) {
                current = current.left;
            }else {
                current = current.right;
            }
            if(current === null) {
                return null;
            }
        }
        return current;
    }

    isPresent(data) {
        let current = this.root;
        while(current) {
            if(current.data === data) {
                return true;
            }
            if(data < current.data) {
                current = current.left
            } else {
                current = current.right
            }
        }
        return false;
    }

    remove(data) {
        const removeNode = (node, data) => {
            if(node === null) {
                return null;
            }
            if(node.data === data) {
                // 1. node has no children
                if(node.left === null && node.right === null) {
                    return null;
                }
                // 2. node has no left child
                if(node.left === null) {
                    return node.right;
                }
                //3. if node has no right child
                if(node.right === null) {
                    return node.left;
                }

                // if node has both children
                let tempNode = this.findMin(node.right);
                node.data = tempNode.data;
                node.right = removeNode(node.right, tempNode.data);
                return node
            } else if(data < node.data) {
                node.left = removeNode(node.left, data);
                return node;
            } else {
                node.right = removeNode(node.right, data);
                return node;
            }
        }
        this.root = removeNode(this.root, data)
    }

    findMinHeight(node = this.root) {
        if(node === null) {
            return -1
        }
        let left = this.findMinHeight(node.left);
        let right = this.findMinHeight(node.right);
        if(left < right) {
            return left + 1;
        } else {
            return right + 1;
        }
    }

    findMaxHeight(node = this.root) {
        if(node === null) {
            return -1
        }
        let left = this.findMaxHeight(node.left);
        let right = this.findMaxHeight(node.right);
        if(left > right) {
            return left + 1;
        } else {
            return right + 1;
        }
    }

    isBalanced() {
        return (this.findMinHeight() >= this.findMaxHeight() - 1)
    }

    inorder() {
        if(this.root === null) {
            return null;
        } else {
            let res = [];
            const traverseInorder = (node) => {
                node.left && traverseInorder(node.left);
                res.push(node.data);
                node.right && traverseInorder(node.right);
            }

            traverseInorder(this.root);
            return res;
        }
    }

    preOrder() {
        if(this.root === null) {
            return null;
        } else {
            let res = [];
            const traversePreOrder = (node) => {
                res.push(node.data);
                node.left && traversePreOrder(node.left);
                node.right && traversePreOrder(node.right);                
            }
            traversePreOrder(this.root);
            return res;
        }
    }

    postOrder() {
        if(this.root === null) {
            return null;
        } else {
            let res = [];
            const traversePostOrder = (node) => {
                node.left && traversePostOrder(node.left);
                node.right && traversePostOrder(node.right);    
                res.push(node.data);                            
            }
            traversePostOrder(this.root);
            return res;
        }
    }
    levelOrder() {
        let result = [];
        let queue = [];
        if(this.root === null) {
            return null
        } else {
            queue.push(this.root)
            while(queue.length > 0) {
                let node = queue.shift();
                result.push(node.data);
                if(node.left !== null) {
                    queue.push(node.left);
                }
                if(node.right !== null) {
                    queue.push(node.right);
                }
            }
            return result; 
        }

    }
}
result = []
queue = [9]

r= [9]
q=[4, 17]

r=[9,4]
q=[17]

q=[17,3,6]
