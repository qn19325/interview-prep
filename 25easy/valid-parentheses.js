"use strict";
function isValid(s) {
    const map = new Map();
    map.set('{', '}');
    map.set('[', ']');
    map.set('(', ')');
    const stack = [];
    for (let i = 0; i < s.length; i++) {
        if (map.has(s[i])) {
            stack.push(s[i]);
        }
        else {
            const val = stack.pop();
            if (!val || map.get(val) !== s[i])
                return false;
        }
    }
    return stack.length === 0;
}
;
console.log(isValid("{([])}"));
console.log(isValid("{([]])}"));
console.log(isValid("{([])"));
