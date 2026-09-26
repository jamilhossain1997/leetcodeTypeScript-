function maxArea(height: number[]): number {
    let left = 0;
    let right = height.length - 1;
    let seen = 0;

    while (left < right) {
        const width = right - left;
        const wall_height = Math.min(height[right], height[left]);
        const area = width * wall_height;
        seen = Math.max(seen, area);

        if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }

    return seen;
}


console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]))