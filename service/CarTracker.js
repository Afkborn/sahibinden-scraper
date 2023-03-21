const { executablePath } = require("puppeteer");
const puppeteer = require("puppeteer-extra");
const StealthPlugin = require("puppeteer-extra-plugin-stealth");
puppeteer.use(StealthPlugin());

function testBot() {
  return new Promise(async (resolve, reject) => {
    puppeteer
      .launch({ headless: true, executablePath: executablePath() })
      .then(async (browser) => {
        console.log("Running tests..");
        const page = await browser.newPage();
        await page.goto("https://bot.sannysoft.com");
        await page.waitForTimeout(5000);
        await page.screenshot({ path: "testresult.png", fullPage: true });
        await browser.close();
        console.log(`All done, check the screenshot. ✨`);
      });
  });
}

exports.testBot = testBot;
