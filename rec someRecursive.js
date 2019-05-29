// SAMPLE INPUT / OUTPUT
// const isOdd = val => val % 2 !== 0;

// someRecursive([1,2,3,4], isOdd) // true
// someRecursive([4,6,8,9], isOdd) // true
// someRecursive([4,6,8], isOdd) // false
// someRecursive([4,6,8], val => val > 10); // false

function someRecursive(a,b){
    
    if(a.length===0){
        return false;
    }
    
        if(b(a[0])){
            return true;
        }
        
   
    
    
        
        return someRecursive(a.slice(1),b);
    
    
  // add whatever parameters you deem necessary - good luck!
}