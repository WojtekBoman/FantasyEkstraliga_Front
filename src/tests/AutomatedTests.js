const { Builder, By, Key, utill } = require("selenium-webdriver");

async function buyAndSellTest() {

    let driver = new Builder().forBrowser("chrome").build();
    driver.get("https://wojtekboman.github.io/FantasyEkstraliga_Front");

    try {

        await driver.findElement(By.linkText("Logowanie")).click();
        await driver.sleep(1500);

        await driver.findElement(By.id("exampleInputLogin")).sendKeys("Jozef1938");
        await driver.findElement(By.id("exampleInputHaslo")).sendKeys("Jozef1938");
        await driver.findElement(By.id("loginButton")).click();
        await driver.sleep(5000);

        await driver.findElement(By.linkText("Transfery")).click();
        await driver.sleep(5000);
        await driver.findElement(By.id("klubForm")).click();
        await driver.sleep(1000);
        await driver.findElement(By.id("Les")).click();
        // await driver.findElement(By.id("Les")).click();
        await driver.sleep(1000);

        await driver.executeScript('window.scrollTo(0,200);');
        await driver.sleep(500);

        await driver.findElement(By.id("buyButton5")).click();
        await driver.sleep(3000);
        await driver.findElement(By.id("okButton")).click();
        await driver.sleep(1000);

        await driver.findElement(By.id("buyButton4")).click();
        await driver.sleep(3000);
        await driver.findElement(By.id("okButton")).click();
        await driver.sleep(1000);

        await driver.findElement(By.id("buyButton2")).click();
        await driver.sleep(3000);
        await driver.findElement(By.id("okButton")).click();
        await driver.sleep(1000);

        await driver.findElement(By.linkText("Skład")).click();
        await driver.sleep(1000);
        await driver.findElement(By.id("tableLineupLink")).click();
        await driver.sleep(5000);

        
        await driver.executeScript('window.scrollTo(0,500);');
        await driver.sleep(2000);

        await driver.findElement(By.id("moreButton4")).click();
        await driver.sleep(2000);
        await driver.findElement(By.id("makeVice")).click();
        await driver.sleep(3000);
        await driver.findElement(By.id("okButton")).click();
        await driver.sleep(2000);

        await driver.findElement(By.id("moreButton2")).click();
        await driver.sleep(2000);
        await driver.findElement(By.id("makeCapitan")).click();
        await driver.sleep(3000);
        await driver.findElement(By.id("okButton")).click();
        await driver.sleep(2000);

        await driver.findElement(By.id("moreButton13")).click();
        await driver.sleep(2000);
        await driver.findElement(By.id("sellButton")).click();
        await driver.sleep(4000);
        await driver.findElement(By.id("okButton")).click();
        await driver.sleep(4000);




    } catch (err) {
        console.log(err);
    }
}

// buyAndSellTest();