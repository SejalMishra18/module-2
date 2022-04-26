const puppeteer=require("puppeteer");
let input=process.argv.slice(2);
(async function()
{
let browserpromise=await puppeteer.launch({headless:false,defaultViewport:null,args:['--start-fullscreen']});
let page=await browserpromise.newPage();
await page.goto("https://www.youtube.com/");
await page.waitForSelector("#search-input");
await page.click("#search-input")
await page.type("#search-input",input,{delay:100});
await page.keyboard.press('Enter');
await page.waitForSelector("#title-wrapper");
await page.click("#title-wrapper");
// let ans = await  checkAd(page)
await page.waitForSelector(".ytp-ad-skip-button ytp-button");
await page.click(".ytp-ad-skip-button ytp-button");
/*await page.evaluate(function()
{
   let eleexist= document.querySelectorAll(".ytp-ad-text.ytp-ad-skip-button-text");
   if(eleexist==null)
   {
       return;
   }
   else{
     page.waitForSelector(".ytp-ad-text.ytp-ad-skip-button-text");
     page.click(".ytp-ad-text.ytp-ad-skip-button-text");
   }
})*/

})();


/*async function checkAd(page){
   let ans= await page.evaluate((page)=>{
        let data = document.querySelector('[class="ytp-ad-preview-image"]')
        return JSON.stringify({data})
    },page)
    console.log(ans)

}*/