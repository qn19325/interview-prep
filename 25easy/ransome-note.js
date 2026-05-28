"use strict";
function canConstruct(ransomNote, magazine) {
    const map = new Map();
    for (let i = 0; i < magazine.length; i++) {
        const count = map.get(magazine[i]);
        map.set(magazine[i], count ? count + 1 : 1);
    }
    for (let i = 0; i < ransomNote.length; i++) {
        const count = map.get(ransomNote[i]);
        if (!count || count < 1)
            return false;
        map.set(ransomNote[i], count - 1);
    }
    return true;
}
;
console.log(canConstruct('aa', 'ab'));
