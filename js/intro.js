console.log("hello");
let a=10;
console.log(a);
let str='I am sejal';
console.log(str);
let char='a';
console.log(char);
let bool=true;
console.log(bool);
for(let i=1;i<5;i++)
{
    console.log(i);
}
let count=10;
while(count>0)
{
    console.log(count);
    count--;
}
let n=7;
let flag=1;
for(let i=2;i*i<=n;i++)
{
    if(n%i==0)
    {
       flag=0;
       break; 
    }
}
    if(flag==1)
    {
        console.log("prime number.")
    }
    else{
        console.log("not prime number..")
    }
