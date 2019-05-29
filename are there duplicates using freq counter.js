function areThereDuplicates() {
    // good luck. (supply any arguments you deem necessary.)
    let lookup={};
    for(let i=0;i<arguments.length;i++){
        (lookup[arguments[i]]) ? lookup[arguments[i]]+=1:lookup[arguments[i]]=1;
        if(lookup[arguments[i]]>1){
            return true;
        }
    }
    return false;
  }