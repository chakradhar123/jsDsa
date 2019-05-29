function linearSearch(a,n){
    // add whatever parameters you deem necessary - good luck!
    for(let i=0;i<a.length;i++){
        if(n==a[i]){
            return i;
        }
    }
    return -1;
  }