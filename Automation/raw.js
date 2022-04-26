const puppeteer=require('puppeteer');
let browserpromise=puppeteer.launch({headless:false});
browserpromise.then(function(browserInstance)
{
    console.log("Browser is opened")
    let pagepromise=browserInstance.newPage();
    return pagepromise;
}).then(function(page)
{
    console.log("page is opened");
    let urlpromise=page.goto("https://www.google.com/");
    return urlpromise;
}).then(function()
{
    console.log("Google is opened");
})