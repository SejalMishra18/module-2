let cp=require('child_process');
cp.execSync("code");
let content=cp.execSync("node test.js");
console.log("Output of test.js file is: "+content);