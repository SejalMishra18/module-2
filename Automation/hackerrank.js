const puppeteer=require('puppeteer');
const code=require('./code.js');//when we require then it becomes object
const mail="netevo5855@ovout.com";
const pwd="123456";
let page;let browserpromise=puppeteer.launch({headless:false,defaultViewport:null,args:['--start-fullscreen']});

browserpromise.then(function(browserinstance)
{
    console.log("Browser is opened");
    let pagepromise=browserinstance.newPage();
    return pagepromise;
    
}).then(function(pageinstance)
{
console.log("page is opened");
page=pageinstance;
let urlpromise=page.goto("https://www.hackerrank.com/");
return urlpromise;
}).then(function()
{
    console.log("url is opened");
    return waitandclick('a[data-event-action="Login"]');
}).then(function(){
    return waitandclick(".fl-button-wrap.fl-button-width-auto.fl-button-left  .fl-button-text");
}).then (function()
{
    let mailwaitpromise=page.waitForSelector("#input-1");
    return mailwaitpromise;
}).then(function()
{
    let mailtypepromise=page.type("#input-1",mail,{delay:100});
    return mailtypepromise;
}).then(function()
{
    let pwdwaitpromise=page.waitForSelector("#input-2")
    return pwdwaitpromise;
}).then(function()
{
    let pwdtypepromise=page.type("#input-2",pwd,{delay:100});
    return pwdtypepromise;
}).then(function(){
    return waitandclick('button[data-analytics="LoginPassword"]');
}).then(function()
{  
    console.log("login successfully");
    return waitandclick('div[data-automation="algorithms"]');
}).then(function(){
    return waitandclick('input[value="warmup"]');
}).then(function()
{
    console.log("warmup is selected..");
    let waitpromise=page.waitForSelector(".challenges-list .js-track-click.challenge-list-item");
    return waitpromise;
}).then(function()
{   let arrpromise=page.evaluate(function()
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
    return arrpromise;
}).then (function(question)
{
    console.log(question);
    console.log(code.answers.length);
    let questionpromise=questionsolver(question[0],code.answers[0]);
    for(let i=1;i<question.length;i++)
    { 
        questionpromise=questionpromise.then(function()
        {
            let newquestion=questionsolver(question[i],code.answers[i]);
            return newquestion;
        })
    }
    return questionpromise;
}).then(function()
{
    console.log("All warmup questions have been submitted.")
})
function waitandclick(selector)
{return new Promise(function(resolve,reject){
    let waitpromise=page.waitForSelector(selector);
    waitpromise.then(function()
    {
        let clickpromise=page.click(selector);
        return clickpromise;
    }).then (function(){
          resolve();
    })
})
}
function questionsolver(question,answer)
{  
    return new Promise(function(resolve,reject)
    {
        let linkpromise=page.goto(question);
        linkpromise.then(function()
        {
            return waitandclick(".custom-holder.inset");
        }).then (function(){
           let typewait=page.waitForSelector(".custom-input.theme-old.size-medium");
           return typewait;
        }).then(function()
        {
            let typepromise=page.type(".custom-input.theme-old.size-medium",answer);
            return typepromise;
        }).then(function()
        {
            let controlhold=page.keyboard.down('Control');
            return controlhold;
        }).then(function()
        {
            let pressA=page.keyboard.press('A');
            return pressA;
        }).then(function()
        {
            let pressX=page.keyboard.press('X');
            return pressX;
        }).then(function()
        {
            let controlup=page.keyboard.up('Control');
            return controlup;
        }).then(function()
        {
        return waitandclick(".hr-monaco-editor-parent")
        }).then(function()
        {
            let controlhold=page.keyboard.down('Control');
            return controlhold;
        }).then(function()
        {
            let pressA=page.keyboard.press('A');
            return pressA;
        }).then(function()
        { let pressV=page.keyboard.press('V');
        return pressV;

        }).then(function()
        {
            let controlup=page.keyboard.up('Control');
            return controlup;
        }).then(function()
        {
            return waitandclick(".ui-btn.ui-btn-normal.ui-btn-primary.pull-right.hr-monaco-submit.ui-btn-styled");
        }).then(function()
        {
            resolve();
        })
    })    
}