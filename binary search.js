function binarySearch(a,n){
    // add whatever parameters you deem necessary - good luck!
    let l=0,h=a.length-1;
    let m=Math.floor((l+h)/2);
    while(l<=h&&n!=a[m]){
        if(n>a[m]){
            l=m+1;
    }
    else if(n<a[m]){
        h=m-1;
    }
    m=Math.floor((l+h)/2);
  }
  if(a[m]==n){
      return m;
  }
  return -1;
  }