const { By, until } = require('selenium-webdriver');
var BasePage = require('../basePage/basePage');
var assert = require('assert');

class homePage extends BasePage {

    async openAllInernetPlans() {
        let seeAllInternetPlans = await driver.wait(until.elementLocated(By.css('a.catalog-link.fstl-base')), 5000);
        await seeAllInternetPlans.click();
    }

    async getAllInternetPlansTitle() {
        await driver.sleep(8000);
        const connectivitySectionTitle = await driver.wait(until.elementLocated(By.css('[data-testid="page-title"]')));
        await driver.wait(until.elementIsVisible(connectivitySectionTitle), 5000);
        return connectivitySectionTitle.getText();
    }

    async openVoucher() {
        let voucherButton = await driver.wait(until.elementLocated(By.css('[data-testid="voucher-node ts-link"]')), 5000);
        await voucherButton.click();
        const voucherPopupTitle = await driver.wait(until.elementLocated(By.css('h3[data-testid="component-title"]')));
        await driver.wait(until.elementIsVisible(voucherPopupTitle), 5000);
    }

    async enterVoucher() {
        let voucherCodeInput = await driver.wait(until.elementLocated(By.name('inputFieldTitle')), 5000);
        await voucherCodeInput.sendKeys('TEST');

        let voucherCodeButton = await driver.wait(until.elementLocated(By.css('button.btn-brand-primary-large')), 5000);
        await voucherCodeButton.click();
    }

    async errorMsgDisplayed() {
        let voucherPopUp = await driver.wait(until.elementLocated(By.css('div.error')));
        let errorMsgIsDisplayed = await voucherPopUp.findElement(By.css('span[data-testid="span"]'));
        await driver.wait(until.elementIsVisible(errorMsgIsDisplayed), 5000);
        return errorMsgIsDisplayed.getText();
    }
}

module.exports = new homePage();