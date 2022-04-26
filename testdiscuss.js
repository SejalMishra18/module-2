//q2
/*let a = 2;
 { let a = 3; { let a=4; {let a = 5; console.log(a); } console.log(a); } console.log(a); } console.log(a);*/

//q3
/*function rainfall(arr)
{
let res=[];
for(let i=0;i<arr.length;i++)
{
    let obj={};
    obj.name=arr[i].name;
    let sum=0;
    let rfall=arr[i].rainfall;
    for(let j=0;j<rfall.length;j++)
    {
      sum=sum+rfall[j];
    }
    let avg=sum/rfall.length;
    obj.averagerainfall=avg;
    res.push(obj);
}
   return res;
}

let res=rainfall([ { name: "Roorkee", rainfall: [5, 6, 5, 5, 4, 7, 8] }, { name: "Pauri", rainfall: [3, 3, 3, 1, 2, 2, 2] }, ]);
console.log(res);*/
//q4
/*let arr = [1, 2, 3]; (function () { for (x in arr) arr.unshift(arr.pop()); console.log(arr); })();

let randomAdder = function (arr = ["a", "b"]) { arr[arr.length * arr.length] = arr.length * arr.length; };

randomAdder(arr); randomAdder();

console.log(arr[9]); console.log(arr[8]);*/
//q8

/*function spoon(arr)
{
 let word1=arr[0];
 let word2=arr[1];
 let spoonerism=word2[0]+word1.slice(1)+" "+word1[0]+word2.slice(1);
 return spoonerism;
}




let str="not picking";
let arr=str.split(" ");
let res=spoon(arr);
console.log(res);*/
//q7
let a;

console.log(a);

function A() { let a = 2; console.log(a);

function C() { console.log(a);

function D() {
  console.log(a);

  a = 2;
}
D();
a = 3;
} C(); }

function B() { let a; console.log(a);

function E() { a = 6; console.log(a);

}

a = 2; E(); console.log(a); }

function F() { console.log(a); a = 2; }

a = 3;

F(); B(); A();