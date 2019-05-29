// isPalindrome('awesome') // false
// isPalindrome('foobar') // false
// isPalindrome('tacocat') // true
// isPalindrome('amanaplanacanalpanama') // true
// isPalindrome('amanaplanacanalpandemonium') // false

function isPalindrome(s){
    // add whatever parameters you deem necessary - good luck!
    if(s[0]==s[s.length-1]&&s.length<=2){
        return true;
    }
    else if(s[0]!=s[s.length-1]){
        return false;
    }
    return isPalindrome(s.slice(1,s.length-1));
    
  }