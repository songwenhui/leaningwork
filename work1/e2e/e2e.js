var webdriver = require('selenium-webdriver'),
    By = webdriver.By,
    until = webdriver.until;

var driver = new webdriver.Builder()
    .forBrowser('firefox')
    .build();

driver.get('http://localhost/homework/tags.html');
driver.findElement(By.className('palm')).click();
driver.findElement(By.className('palm')).click();
driver.findElement(By.className('palm')).click();
driver.findElement(By.className('palm')).click();
driver.findElement(By.className('palm')).click();
driver.findElement(By.className('palm')).click();
driver.findElement(By.className('palm')).click();
driver.findElement(By.className('palm')).click();
driver.findElement(By.className('palm')).click();
driver.wait(until.elementLocated(By.className('palm')), 1000);
driver.quit();