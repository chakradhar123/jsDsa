function isSubsequence(s1,s2) {
    // good luck. Add any arguments you deem necessary.
    let i=0;
    for(let j=0;j<s2.length;j++){
    if(s1[i]==s2[j]){
        i++;
    }
    if(i==s1.length){
        return true;
    }
    }
    return false;
  }
  