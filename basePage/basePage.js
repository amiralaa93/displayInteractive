var webdriver = require("selenium-webdriver");
var driver = new webdriver.Builder().forBrowser('chrome').build();

class BasePage {
    constructor(){
        global.driver = driver;
    }

    openURL(URL){
        driver.get(URL);
    }
}

module.exports = BasePage;