function topKFrequent(nums: number[], k: number): number[] {
    const seen = new Map<number, number>();
    for(const num of nums){
        seen.set(num,(seen.get(num) ?? 0)+1);

    }
    const result = [...seen.entries()]
         .sort((a,b)=> b[1]-a[1])
         .slice(0,k)
         .map(entry=> entry[0]);

    return result;
}

console.log(topKFrequent([1,1,1,2,2,3], 2));

console.log(topKFrequent([1], 1));
console.log(topKFrequent([4,1,-1,2,-1,2,3], 2));

