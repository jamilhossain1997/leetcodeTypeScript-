function isAnagram(s: string , t: string ): boolean{
    if(s.length != t.length){
        return false;
    }

    const count = new Array(26).fill(0);

    for(const c of s){
        count[c.charCodeAt(0) - 'a'.charCodeAt(0)]++;
    }
    for(const c of t){
        count[c.charCodeAt(0) - 'a'.charCodeAt(0)]--;
    }

    return count.every(c=> c==0);
}

console.log(isAnagram("anagram", "nagaram")); // true
console.log(isAnagram("rat", "car"));          // false
console.log(isAnagram("a", "ab"));