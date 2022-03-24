function imageSmoother(img: number[][]): number[][] {
    let ans = new Array(img.length)
    for (let index = 0; index < img.length; index++) {
        ans[index] = new Array(img[0].length)
    }
    for (let i = 0; i < img.length; i++) {
        for (let j = 0; j < img[0].length; j++) {
            let count = 0
            let sum = 0
            for (let x = i - 1; x <= i + 1 && x < img.length; x++) {
                for (let y = j - 1; y <= j + 1 && y < img[0].length; y++) {
                    if (x >= 0 && y >= 0) {
                        sum += img[x][y]
                        count++
                    }
                }
            }
            ans[i][j] = Math.floor(sum / count)
        }
    }
    return ans
};

console.log(imageSmoother([[100, 200, 100], [200, 50, 200], [100, 200, 100]]))