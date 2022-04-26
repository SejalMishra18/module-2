let input=process.argv.slice(2);
//console.log(input);
const fs=require("fs");
const { isGeneratorFunction } = require("util/types");
let fileArr=[];
let opArr=[];
for(let i=0;i<input.length;i++)
{
    if(input[i].charAt(0)=='-')
    {
         opArr.push(input[i]);
    }
    else{
        fileArr.push(input[i]);
    }
}

//console.log(opArr);
//console.log(fileArr);
let content="";
for(let i=0;i<fileArr.length;i++)
{
    if(fs.existsSync(fileArr[i]))
    {
let fileContent=fs.readFileSync(input[i]);
content=content+fileContent+"\r\n";
    }
    else{
        console.log("please enter correct file input");
    }
}
//console.log(content);
//console.log(content.length);
let buffer=content.split("\r\n");
//console.log(buffer);
//console.log(buffer.length);
function fn()
{
let isNBpresent=opArr.includes("-n") && opArr.includes("-b")
if(isNBpresent==true)
{
    console.log("Either b or n can be run ");
    return;
}

let isNpresent=opArr.includes("-n");
if(isNpresent==true)
{
    for(let i=0;i<buffer.length;i++)
    {
        buffer[i]=`${i+1}.${buffer[i]}`;
    }
    console.log(buffer.join("\n"));
   
}
let isBpresent=opArr.includes("-b");
if(isBpresent==true)
{
    let count=1;
    for(let i=0;i<buffer.length;i++)
    {
        if(buffer[i]!="")
        {
        buffer[i]=`${count}.${buffer[i]}`;
        count++;
        }
    }
    console.log(buffer.join("\n"));
   
}
}
fn();
let isSpresent=opArr.includes("-s");
if(isSpresent==true)
{
    for(let i=1;i<buffer.length;i++)
    {
        if(buffer[i]==""&&buffer[i-1]=="")
        {
            buffer[i]=null;
        }
        else if(buffer[i]==""&&buffer[i-1]==null)
        {
            buffer[i]=null;
        }
    }
}
let tempArr=[];
for(let i=0;i<buffer.length;i++)
{
    if(buffer[i]!=null)
    {
        tempArr.push(buffer[i]);
    }
}
buffer=tempArr;
console.log(buffer);
//console.log(buffer.length);





