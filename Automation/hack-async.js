const puppeteer=require('puppeteer');
const code=require('./code.js');//when we require then it becomes object
const mail="netevo5855@ovout.com";
const pwd="123456";
(async function(){
let browser=await puppeteer.launch({headless:false,defaultViewport:null,args:['--start-fullscreen']});
let page=await browser.newPage();
await page.goto("https://www.hackerrank.com/");
await waitandclick('a[data-event-action="Login"]',page);
await waitandclick(".fl-button-wrap.fl-button-width-auto.fl-button-left  .fl-button-text",page);
await page.waitForSelector("#input-1");
await page.type("#input-1",mail,{delay:100});
await page.waitForSelector("#input-2");
await page.type("#input-2",pwd,{delay:100});
await waitandclick('button[data-analytics="LoginPassword"]',page);
await waitandclick('div[data-automation="algorithms"]',page);
await waitandclick('input[value="warmup"]',page);
let questionsArr=await page.evaluate(function()
    {   let arr=[];
        let atags=document.querySelectorAll(".challenges-list .js-track-click.challenge-list-item");
        for(let i=0;i<atags.length;i++)
        {    
            let link=atags[i].href;
            console.log(link);//this link will show in browser
            arr.push(link);
        }
        return arr;
    })
    console.log(questionsArr);
    for(let i=0;i<questionsArr.length;i++){
        await questionSolver(questionsArr[i],code.answers[i],page);
    }
})();

async function waitandclick(selector,page)
{
    await page.waitForSelector(selector);
    await page.click(selector);
}
async function questionSolver(question,answer,page)
{
    await page.goto(question);
   await waitandclick(".custom-holder.inset",page);
   await page.type(".custom-input.theme-old.size-medium",answer);
   await page.keyboard.down('Control');
   await page.keyboard.press('A');
   await page.keyboard.press('X');
   await page.keyboard.up('Control');
   await waitandclick(".hr-monaco-editor-parent",page);
   await page.keyboard.down('Control');
   await page.keyboard.press('A');
   await page.keyboard.press('V');
   await page.keyboard.up('Control');
   await waitandclick(".ui-btn.ui-btn-normal.ui-btn-primary.pull-right.hr-monaco-submit.ui-btn-styled",page);
}