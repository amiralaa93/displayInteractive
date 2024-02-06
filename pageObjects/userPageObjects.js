const { By, until, Select } = require('selenium-webdriver');
var BasePage = require('../basePage/basePage');

class userPage extends BasePage {

    async openProfilePage() {
        let userIcon = await driver.wait(until.elementLocated(By.css('[data-testid="tab_bar-user-icon"]')), 5000);
        await userIcon.click();
    }

    async selectFrench() {
        let languageDropDown = await driver.wait(until.elementLocated(By.css('[data-testid="language"]')), 5000);
        const select = new Select(languageDropDown);
        await select.selectByValue('fr');
    }

    async getLanguageTitleFR() {
        await driver.sleep(8000);
        const langueTitle = await driver.wait(until.elementLocated(By.css('div.form-title')));
        await driver.wait(until.elementIsVisible(langueTitle), 5000);
        return langueTitle.getText();
    }

    async getProfileTitleFR() {
        const profileFormTitle = await driver.wait(until.elementLocated(By.css('div.form-title.your-profile-title')));
        await driver.wait(until.elementIsVisible(profileFormTitle), 5000);
        return profileFormTitle.getText();
    }

    async getMainMenuFR() {
        const firstLink = await driver.wait(until.elementLocated(By.css('.burger-item-link')));
        await driver.wait(until.elementIsVisible(firstLink), 5000);
        return firstLink.getText();
    }
}

module.exports = new userPage();