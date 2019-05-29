function validAnagram(s1,s2){
    // add whatever parameters you deem necessary - good luck!
    if(s1.length!=s2.length){
        return false;
    }
    let lookup={};
    for(let i=0;i<s1.length;i++){
        (lookup[s1[i]]) ? lookup[s1[i]]+=1:lookup[s1[i]]=1;
    }
    
    for (let i=0;i<s2.length;i++) {
        if(!(lookup[s2[i]])){
            return false;
        }
        lookup[s2[i]]-=1;
    }
    return true;
    
    
  }