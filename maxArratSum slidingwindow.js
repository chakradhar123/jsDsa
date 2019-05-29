function maxSubarraySum(a,n){
    // add whatever parameters you deem necessary - good luck!
    if(n>a.length){
        return null;
    }
    let max=0;
    for(let i=0;i<n;i++){
        max+=a[i];
    }
    let temp=max;
    for(let j=n;j<a.length;j++){
        temp=temp-a[j-n]+a[j];
        if(max<temp){
            max=temp;
        }
        
    }
    return max;
  }
  