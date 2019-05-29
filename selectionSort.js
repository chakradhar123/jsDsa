function selectionSort(a){
    let lowest,temp;
    for(let i=0;i<a.length-1;i++){
        lowest=i;
        for(j=i+1;j<a.length;j++){
            if(a[j]<a[lowest]){
                lowest=j;
            }
        }
        if(lowest !== i){
            temp=a[i];
            a[i]=a[lowest];
            a[lowest]=temp;
        }
    }
    return a;
}