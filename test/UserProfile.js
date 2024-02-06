const { describe } = require('mocha');
const assert = require('assert');
const confirmationPageObjects = require('../pageObjects/confirmationPageObjects');
const userPageObjects = require('../pageObjects/userPageObjects');

describe('User Profile', function () {
    this.timeout(50000);

    before(async function() {
        var baseUrl = 'https://portal-ugo.ife.ugo.aero/';
        confirmationPageObjects.openURL(baseUrl);
    });
    
    it('Accept GDPR', async function() {
        let title = await driver.getTitle();
        assert.equal(title, 'UGO Airline');

        confirmationPageObjects.acceptGDPR();
    });

    it('Open User Page and switch the language to French', async function() {        
        userPageObjects.openProfilePage();
        userPageObjects.selectFrench();
        const languageTitle = await userPageObjects.getLanguageTitleFR();
        console.log("Language Title is: " +languageTitle);
        assert.equal(languageTitle, 'Langue', 'Language Title does not match expected value');

        const profileFormTitle = await userPageObjects.getProfileTitleFR();
        console.log("Profile Form Title is: " +profileFormTitle);
        assert.equal(profileFormTitle, 'Vos informations personnelles',  'Profile Form Title does not match expected value');        

        const firstItem = await userPageObjects.getMainMenuFR();
        console.log("First Item is: " +firstItem);
        assert.equal(firstItem, 'Packs internet',  'First Item not as same as requirments');        

    });

    after(() => driver && driver.quit());
});