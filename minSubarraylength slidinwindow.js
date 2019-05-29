function minSubArrayLen(a,n){
    // add whatever parameters you deem necessary - good luck!
    
    let min=Infinity;
    
    let temp=a[0],start=0,end=0;
    while(true){
        
        if (temp<n&&end<a.length){
            end++;
            temp+=a[end];
        }
        if(temp>=n&&end<a.length){
            if(min>end-start+1){
                min=end-start+1;
            }
            temp-=a[start];
            start++;
        }
        //we are keepin start is greater than end because if we find a sub array of length 1 in middle then the second if condition is always true so start value is incremented in second if condition so start will eventually become>end and we loop out
        if(end===a.length||start>end){
            break;
        }
        
    }
    return (min===Infinity) ? 0:min;
  }