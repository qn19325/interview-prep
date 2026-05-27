function isAnagram(s: string, t: string): boolean {
    if (s.length !== t.length) return false;

    const sMap = new Map<string, number>();
    const tMap = new Map<string, number>();

    for (let i=0; i<s.length; i++) {
        const sVal = sMap.get(s[i]);
        sMap.set(s[i], sVal ? sVal + 1 : 1)
        const tVal = tMap.get(t[i]);
        tMap.set(t[i], tVal ? tVal + 1 : 1)
    }

    for (let [key, val] of sMap) {
        if (tMap.get(key) !== val) return false;
    }

    return true;
};

console.log(isAnagram("abcd", "dcba"))