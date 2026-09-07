function subarraySumEqual(nums: number [], k: number): number {
    const seen = new Map < number, number > ();
    seen.set(0,1);

    let currentSum = 0;
    let count = 0;
    for(const num of nums){
        currentSum += num;

        if(seen.has(currentSum-k)){
            count += seen.get(currentSum-k) !;
        }

        seen.set(currentSum,(seen.get(currentSum) ?? 0)+1);


    }

    return count;
}