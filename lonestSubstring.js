function findLongestSubstring(s){
    // add whatever parameters you deem necessary - good luck!
    let longest=0,storeIndex={},start=0;
    for(let i=0;i<s.length;i++){
       
        if(storeIndex[s[i]]){
            if(start<storeIndex[s[i]]){
            start=storeIndex[s[i]];
            }
        }
   
        storeIndex[s[i]]=i+1;
        if(longest<i-start+1){
            longest=i-start+1;
        }
    }
    return longest;
  }
  
  