const fs=require("fs");
console.log("Before");
fs.readFile("file.txt",cb1);
fs.readFile("file1.txt",cb2);
function cb1(error,data)
{
    if(error)
    {
        console.log(error);
    }
    else{
        console.log(data+" ");
    }
}
function cb2(error,data)
{
    if(error)
    {
        console.log(error);
    }
    else{
        console.log(data+" ");
    }
}
console.log("after");

