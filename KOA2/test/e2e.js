var webdriver = require('selenium-webdriver'),
    By = webdriver.By,
    until = webdriver.until;

var driver = new webdriver.Builder()
    .forBrowser('firefox')
    .build();

driver.get('http://127.0.0.1:8080');
driver.findElement(By.id('thumb')).click();
driver.wait(until.titleIs('webdriver - Google Search'), 1000);
driver.quit();
