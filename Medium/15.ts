function threeSum(nums:number[]): number [][]{
    nums.sort((a,b)=>a-b);
    const n =nums.length;
    const result: number [][] =[];

    for(let i = 0; i< n-2; i++){
        if(nums[i]>0) break;
        
        if(i > 0 && nums[i]==nums[i-1]) continue;

        let left = i+1;
        let right = n-1;

        while(left < right){
            const total = nums[i]+nums[left]+nums[right] ;

            if(total === 0){
                result.push([nums[i],nums[left],nums[right]]);
                left++ ;
                right-- ;

                while(left < right && nums[left]=== nums[left -1]) left++ ;
                while(left < right && nums[right]==nums[right-1]) right-- ;

            }else if(total < 0){
                left++ ;
            }else{
                right-- ;
            }
        }
    }

    return result;
}