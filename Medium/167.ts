function twoSum(nums: number[],target: number): number[]{
    let left = 0;
    let right = nums.length - 1;

    while(left < right ){
        const currentSum = nums[left]+nums[right];

        if(currentSum == target){
            return [left+1,right+1];
        }if (currentSum > target) {
            right--;
        } else {
            left++ ;
        }
    }

    return [];
}

console.log(twoSum([2,7,11,15],9));