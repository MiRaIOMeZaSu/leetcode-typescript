function projectionArea(grid: number[][]): number {
    // 每次都找最高的地方
    // 比较
    let ans = 0;
    for (let i = 0; i < grid.length; i++) {
        let localMax = 0;
        for (let j = 0; j < grid[j].length; j++) {
            if (grid[i][j] > 0) {
                localMax = Math.max(localMax, grid[i][j]);
                ans += 1;
            }
        }
        ans += localMax;
    }
    for (let j = 0; j < grid[0].length; j++) {
        let localMax = 0;
        for (let i = 0; i < grid.length; i++) {
            localMax = Math.max(grid[i][j], localMax)
        }
        ans += localMax;
    }
    return ans;
};