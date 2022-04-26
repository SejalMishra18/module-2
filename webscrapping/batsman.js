const request=require("request");
const jsdom=require("jsdom");
const{ JSDOM }= jsdom;
const link="https://www.espncricinfo.com/series/ipl-2021-1249214/royal-challengers-bangalore-vs-kolkata-knight-riders-eliminator-1254115/full-scorecard";

request(link,cb);
function cb(error,response,html)
{
    if(error)
    {
        console.log(error);
    }
    else{
        const dom=new JSDOM(html);
        const document=dom.window.document;
        let batsman=document.querySelectorAll(".batsman-cell.text-truncate a");
        for(let i=0;i<batsman.length;i++)
        {  let link=batsman[i].href;
            let complete="https://www.espncricinfo.com"+link;
           // console.log(complete);
           request(complete,cb2);
           function cb2(error,response,html)
   {
    if(error)
    {
        console.log(error);
    }
    else{
        const dom=new JSDOM(html);
        const document=dom.window.document;
        let batsman=document.querySelectorAll(".player-card-description.gray-900");
        let name=batsman[0].textContent;
        let dob=batsman[1].textContent;
        console.log(name,":",dob);
        }
        
    }
  }
}
}