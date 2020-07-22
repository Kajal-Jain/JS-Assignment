let checkPrime= function(n) {
    let i;
    for( i = 2; i < n && n % i != 0; i++ );
    if(i == n)
        return n+", ";
        return "";
};
let str = "";
let no = prompt("enter range n :");
for(let i = 2; i <= no; i++){
    str = str + checkPrime(i);
}
console.log(str);