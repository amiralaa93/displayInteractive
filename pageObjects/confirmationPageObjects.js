const { Builder, By, Key, until } = require('selenium-webdriver');
var BasePage = require('../basePage/basePage');
var webdriver = require('selenium-webdriver');
const assert = require('assert');


class ConfirmationPage extends BasePage {

    async acceptGDPR() {
        let componentTitle = await driver.wait(until.elementLocated(By.css('[data-testid="component-title"]')), 5000);
        let title = await componentTitle.getText();
        assert.equal(title, 'We value your privacy');

        let acceptButton = await driver.wait(until.elementLocated(By.css('[data-testid="eula-accept"]')), 5000);
        await acceptButton.click();
    }
}

module.exports = new ConfirmationPage();