function swap(arr,i,j){
    let temp=arr[i];
    arr[i]=arr[j];
    arr[j]=temp;
}

function pivot(arr,start,end){
    let pivot=arr[start];
    let swapIndex=start;

    for(let i=start+1;i<=end;i++){
        if(pivot>arr[i]){
            swapIndex++;
            if(i!=swapIndex){
            swap(arr,swapIndex,i)
            }
        }

    }
    if(start!=swapIndex){
        swap(arr,start,swapIndex);
    }
    return swapIndex;
}

function quickSort(arr,left,right){
    if(left<right){
    let pivotIndex=pivot(arr,left,right);
    quickSort(arr,left,pivotIndex-1);
    quickSort(arr,pivotIndex+1,right);
    }
}