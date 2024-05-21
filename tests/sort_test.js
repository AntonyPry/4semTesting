const marketPage = require("../pages/sort");
 const mocha = require("mocha");
 const { By } = require("selenium-webdriver");
 const { assert } = require("chai");
 const { allure } = require("allure-mocha/dist/MochaAllureReporter");
const { getNowDateAndTime } = require("../currentDateTime");

 mocha.describe("Yandex Market Add to bag test", function () {
   const ybp = new marketPage();

   before(async function () {
     await ybp.open();
   });

   after(async function () {
     await ybp.closeBrowser();
   });

   it("check cheap product", async function () {
     await allure.step("open category", async function () {
       await ybp.clickCatalogButton();
       await ybp.clickBigCategory();
       await ybp.clickMediumCategory();
       await ybp.clickSmallCategory();
       await ybp.checkHeader("Внутренние жесткие диски");
     });

     await allure.step("log products", async function () {
       await ybp.logFirstFiveProducts();

     });

     await allure.step("check", async function () {
       console.log('-------------------------------------------');
       console.log('Тестирование сортировки по возрастанию цены');
       console.log('-------------------------------------------');
       await ybp.clickCheap();
       await driver.sleep(3000);
       await ybp.checkCheapProducts()
     });
   });
   afterEach(async function() {
    if (this.currentTest.state == 'failed') {
        let dateTime = getNowDateAndTime()
        let imageFileName = `${this.currentTest.title}_${dateTime}.jpg`
        await page.saveScreenshot(imageFileName)
    }
})
 }); 