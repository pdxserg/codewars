function missingNo(nums) {
    const res = nums.sort((a, b) => a - b);

    for(let i =0 ; i<res.length; i++){
        if(res[i] !== i)return i
    }

}