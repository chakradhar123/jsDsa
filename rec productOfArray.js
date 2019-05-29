// productOfArray([1,2,3]) // 6
// productOfArray([1,2,3,10]) // 60
function productOfArray(a){
    if(a.length==1){
        return a[0];
    }
    return a[0]*productOfArray(a.slice(1));
}