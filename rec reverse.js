function reverse(s){
    // add whatever parameters you deem necessary - good luck!
    if(s.length==1){
        return s[0];
    }
    let s1='';
    s1+=s[s.length-1];
    return s1+reverse(s.slice(0,s.length-1));
    
  }
  
  // reverse('awesome') // 'emosewa'
  // reverse('rithmschool') // 'loohcsmhtir'
  