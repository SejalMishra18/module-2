let puppeteer=require("puppeteer");
let user=process.argv[2];
let msg=process.argv.slice(3);

   
(async function(){
    let id='developer13142000';
let pass='abc12345'
let browser=await puppeteer.launch({headless:false,defaultViewport:null });
 let page = await browser.newPage();
 
  await page.goto("https://www.instagram.com/ ");
  await page.waitForSelector('input[name="username"]');
  await page.type('input[name="username"]',id,{delay:100});
  await page.type('input[aria-label="Password"]',pass,{delay:100});
  await page.click('.sqdOP.L3NKy.y3zKF');
  await page.waitForSelector('.olLwo');
  await page.click('.sqdOP.L3NKy.y3zKF');
  await page.waitForSelector('.aOOlW.HoLwm ');
  await page.click('.aOOlW.HoLwm ');
  await page.waitForSelector('svg[aria-label="Messenger"]');
  await page.click('svg[aria-label="Messenger"]  ');
await page.waitForSelector('.sqdOP.L3NKy.y3zKF');
await page.click('.sqdOP.L3NKy.y3zKF');
await page.waitForSelector('.j_2Hd.uMkC7.M5V28');
await page.type('.j_2Hd.uMkC7.M5V28',user);
await page.waitForSelector('svg[aria-label="Toggle selection"]');
await page.click('svg[aria-label="Toggle selection"]');
await page.waitForSelector('.rIacr');
await page.click('.rIacr');
await page.waitForSelector('textarea[placeholder="Message..."]');
await page.type('textarea[placeholder="Message..."]',msg,{delay:200});
await page.keyboard.press("Enter");
})();