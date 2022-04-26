const request = require("request");
const jsdom=require("jsdom");
const { JSDOM }=jsdom;
const link=("https://www.espncricinfo.com/series/indian-premier-league-2022-1298423/punjab-kings-vs-royal-challengers-bangalore-3rd-match-1304049/live-cricket-score")
request(link,cb)

function cb (error,response, html) {
  if(error){
    console.log('error:', error);}//print if the error occured.
  else{ 
  const dom=new JSDOM(html);
  const document=dom.window.document;
  let teamname= document.querySelectorAll(".match-info.match-info-MATCH.match-info-MATCH-half-width .name-detail") 
  console.log(teamname[0].textContent);
  console.log(teamname[1].textContent);
}
}