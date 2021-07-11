function Stack() {
    this.dataStore = [];
    this.top = 0;
    this.push = push;
    this.pop = pop;
    this.peek = peek;
    this.clear = clear;
    this.length = length;
    this.showStack = showStack;
}

function push(element) {
    this.dataStore[this.top] = element;
    this.top++;
}

function pop() {
    this.top--;
    return this.dataStore[this.top];
}

function peek() {
    return this.dataStore[this.top - 1];
}

function clear() {
    this.top = 0;
}

function length() {
    return this.top;
}

function print(element) {
    console.log(element);
}

function showStack() {
    return this.dataStore;
}


// var s = new Stack();
// s.push("David");
// s.push("Raymond");
// s.push("Bryan");
// print("length: " + s.length());
// print(s.peek());
// var popped = s.pop();
// print("The popped element is: " + popped);
// print(s.peek());
// s.clear();
// print("length: " + s.length());
// print(s.peek());
// s.push("Clayton");
// print(s.peek());

// 1. Multiple base conversions using stack
// number n => base b

// Algo : rightmost digit of n => n % b => push it on top of stack
// replace n with n / b
// repeat steps 1 and 2 until n = 0
// build converted number by popping stack until stack is empty 

function convertToBase(num, base) {
    let s = new Stack();
    do {
        s.push(num % base);
        num = Math.floor(num / base);
    } while (num !== 0);

    let converted = '';
    while (s.length() > 0) {
        converted += s.pop()
    }
    return converted;

}

// print(convertToBase(32, 2)) => 100000
// print(convertToBase(125, 8)) => 175


// 2. Palindrome Checker

function Palindrome(item) {
    let s = new Stack();
    for(let i=0; i< item.length; i++) {
        s.push(item[i])
    }
    let rev = ''
    while(s.length() > 0) {
        rev += s.pop()
    }

    if(rev === item) {
        return `${item} is a Palindrome`
    } else {
        return `${item} is not a Palindrome`
    }
}

// print(Palindrome('racecar'))

// 3. factorial using recursion

function factorialRecursion(num) {
    if(num === 0) return 1;
    else return num * factorialRecursion(num-1);
}

// print(factorialRecursion(5))

// factorial using stacks;
function factorialStacks(num) {
    let s = new Stack();
    do {
        s.push(num);
        num -= 1;
    } while(num !== 0);

    let mul = 1;
    while(s.length() > 0) {
        mul *= s.pop();
    }
    return mul;
}

print(factorialStacks(5))

