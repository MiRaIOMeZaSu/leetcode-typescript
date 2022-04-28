function sortArrayByParity(nums: number[]): number[] {
    let ans :number[] = new Array();
    for (let index = 0; index < nums.length; index++) {
        if(nums[index] % 2==0){
            ans.push(nums[index])
        }
    }
    for (let index = 0; index < nums.length; index++) {
        if(nums[index] % 2!=0){
            ans.push(nums[index])
        }
    }
    return ans;
};