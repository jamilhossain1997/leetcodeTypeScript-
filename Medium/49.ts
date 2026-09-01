function groupAnagrams(strs: string[]): string[][] {
    const seen = new Map<string, string[]>();
    for (const str of strs){
        const key = str.split('').sort().join('');

        if ( !seen.has(key)){
            seen.set(key,[]);
        }
        seen.get(key)!.push(str);
        
    }
    return Array.from(seen.values());
}

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
console.log(groupAnagrams([""]));
console.log(groupAnagrams(["a"]));
