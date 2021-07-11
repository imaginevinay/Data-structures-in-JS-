// 1. balancing parenthesis

function balanceParenthesis(str) {
    let map = {
        '(' : ')',
        '{' : '}',
        '[' : ']'
    }

    let stack = [];

    for(let i in str) {
        let char = str[i];
        if(map[char]) {
            stack.push(map[char])
        } else if (char !== stack.pop()) {
            return false;
        }
    }
    return stack.length === 0;
}

// console.log(balanceParenthesis('2.3 + 23 / 12 + (3.14159* .24'))
// console.log(balanceParenthesis('[{(}]'))