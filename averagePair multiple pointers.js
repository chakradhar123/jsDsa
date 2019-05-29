function averagePair(a,n){
    // add whatever parameters you deem necessary - good luck!
    let low=0,high=a.length-1,av;
    do{
        av=(a[low]+a[high])/2;
        if(av<n){
            low+=1;
        }
        else if(av>n){
            high-=1;
        }
    }while(low<high && av!==n);
    if(av===n){
        return true;
    }
    return false;
    
  }