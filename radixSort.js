function getDigit(num, i){
    return Math.floor(Math.abs(num)/Math.pow(10,i))%10;
}
function digitCount(num){
    if(num===0){
        return 1;
    }
    return Math.floor(Math.log10(Math.abs(num)))+1;
}
function mostDigits(nums){
    let maxDigits=0;
    for(let i=0;i<nums.length;i++){
        maxDigits=Math.max(maxDigits,digitCount(nums[i]));
    }
    return maxDigits;
}
function countSort(nums,k){
    let output=[[],[],[],[],[],[],[],[],[],[]],count=[0,0,0,0,0,0,0,0,0,0];
    for(let i=0;i<nums.length;i++){
        count[getDigit(nums[i],k)]++;
        output[getDigit(nums[i],k)][count[getDigit(nums[i],k)]-1]=nums[i];
    }
    let m=0;
    for(let i=0;i<10;i++){
        for(let j=0;j<count[i];j++){
            nums[m]=output[i][j];
            m++;
        }
    }
    

}

function radixSort(nums){
    let maxDigitCount=mostDigits(nums);
    for(let k=0;k<maxDigitCount;k++){
        countSort(nums,k);

    }
}
function radixSort2(nums){
    let maxDigitCount=mostDigits(nums);
    for(let k=0;k<maxDigitCount;k++){
        let digitBuckets=Array.from({length:10},()=>[]);
        for(let i=0;i<nums.length;i++){
        let digit=getDigit(nums[i],k);
        digitBuckets[digit].push(nums[i]);
        }
        nums=[].concat(...digitBuckets);
    }

return nums;
}