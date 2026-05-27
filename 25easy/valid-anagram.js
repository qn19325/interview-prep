"use strict";
function isAnagram(s, t) {
    if (s.length !== t.length)
        return false;
    const sMap = new Map();
    const tMap = new Map();
    for (let i = 0; i < s.length; i++) {
        const sVal = sMap.get(s[i]);
        sMap.set(s[i], sVal ? sVal + 1 : 1);
        const tVal = tMap.get(t[i]);
        tMap.set(t[i], tVal ? tVal + 1 : 1);
    }
    for (let [key, val] of sMap) {
        if (tMap.get(key) !== val)
            return false;
    }
    return true;
}
;
console.log(isAnagram("abcd", "dcba"));
