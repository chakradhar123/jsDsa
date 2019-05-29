function merge(arr,low,mid,high){
    let L1=[],L2=[],n1=mid-low+1,n2=high-mid;

    for(let i=0;i<n1;i++){
        L1[i]=arr[low+i];
    }
    for(let i=0;i<n2;i++){
        L2[i]=arr[mid+1+i];
    }
    let i=0,j=0,k=low;
    while(i<n1&&j<n2){
        if(L1[i]<L2[j]){
            arr[k++]=L1[i++];
        }
        else{
            arr[k++]=L2[j++];
        }
    }
  
        while(i<n1){
            arr[k++]=L1[i++];
        }

  
        while(j<n2){
            arr[k++]=L2[j++];
        }
  


}
function mergeSort(arr,low,high){
    if(low<high){
    let mid=Math.floor((low+high)/2);
    mergeSort(arr,low,mid);
    mergeSort(arr,mid+1,high);
    merge(arr,low,mid,high);
}
}