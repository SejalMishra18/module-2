function sayhello(){
    console.log("Hello from functions!!!")
}
sayhello();
function sum(m,n){
    let add=m+n;
    console.log("Addition:" +add);
}
sum(8,2);
function mul(a,b)
{
    return(a*b);
}
let ans=mul(3,5);
console.log(ans);
let a=function sub(c,d){
    return (c-d);
}
console.log(a(10,5));
let b=function mod(e,f){
    return(e%f);
}
let d=b(10,5);
console.log(d);
(function(n1,n2){

    console.log(n1/n2);
})(15,3);
(function(){
    console.log("Hello world...");
})(); 