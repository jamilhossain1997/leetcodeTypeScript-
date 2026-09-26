function maxArea(height: number[]): number {
    const n = height.length
    let best = 0;

    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            const width = i - j;
            const wall =Math.min(height[i],height[j]);
            const Area =width*wall;
            best =Math.max(Area*wall);
        }
    }


    return best;
};


console.log(maxArea([1,8,6,2,5,4,8,3,7]))