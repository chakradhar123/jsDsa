function fib(n){
    if(n<=2){
        return 1
    }
    let f=[0,1,1];
    for(let i=3;i<=n;i++){
        f[i]=f[i-1]+f[i-2];
    }
    return f[n];
}