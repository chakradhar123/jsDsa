function bubbleSort(a){
    let temp,noSwap;
    for(i=0;i<a.length-1;i++){
        noSwap=1;
        for(j=0;j<a.length-i-1;j++){
            if(a[j]>a[j+1]){
                temp=a[j];
                a[j]=a[j+1];
                a[j+1]=temp;
                noswap=0;
            }
        }
        if(noswap){
            return a;
        }
    }
    return a;
}