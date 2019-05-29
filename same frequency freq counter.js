function sameFrequency(n1,n2){
    // good luck. Add any arguments you deem necessary.
    let lookup={},i=0,j=0;
    while(n1!==0){
        let x=n1%10;
        (lookup[x]) ? lookup[x]+=1:lookup[x]=1;
        n1=Math.floor(n1/10);
        i++;
    }
    while(n2!==0){
        let y=n2%10;
        if(!(lookup[y])){
            return false;
        }
        lookup[y]-=1;
        n2=Math.floor(n2/10);
        j++;
    }
    
    return true;
  }
  