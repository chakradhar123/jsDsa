function insertionSort1(a){
    let insertPlace;
  for (let i=1;i<a.length;i++){
      let currentVal=a[i];
      insertPlace=i-1;
      for(let j=i-1;j>=0&&a[j]>currentVal;j--,insertPlace=j){
          a[j+1]=a[j];
      }
      a[insertPlace+1]=currentVal;
  }
  return a;
}



//or
function insertionSort2(a){
    for (var i=1;i<a.length;i++){
        var currentVal=a[i];
        for(var j=i-1;j>=0&&a[j]>currentVal;j--){
            a[j+1]=a[j];
        }
        a[j+1]=currentVal;
    }
    return a;
  }