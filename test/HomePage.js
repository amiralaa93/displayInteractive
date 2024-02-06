const { describe } = require('mocha');
const assert = require('assert');
const homePageObjects = require('../pageObjects/homePageObjects');
const confirmationPageObjects = require('../pageObjects/confirmationPageObjects');

describe('Home Page', function () {
    this.timeout(50000);
    

    before(async function() {
        var baseUrl = 'https://portal-ugo.ife.ugo.aero/';
        homePageObjects.openURL(baseUrl);
        confirmationPageObjects.acceptGDPR();
    });
    
    it('Internet Plans dedicated page', async function() {
        let title = await driver.getTitle();
        assert.equal(title, 'UGO Airline');

        homePageObjects.openAllInernetPlans();

        const connectivitySectionTitle = await homePageObjects.getAllInternetPlansTitle();
        console.log("Connection Page Title is: " +connectivitySectionTitle);
        assert.equal(connectivitySectionTitle, 'Connect to Internet',  'Connectivity Section Title does not match expected value');        

    });

    it('Voucher Feature', async function() {        
        homePageObjects.openVoucher();
        homePageObjects.enterVoucher();
        const errorMsgText = await homePageObjects.errorMsgDisplayed();
        console.log("Error Msg is: " +errorMsgText);
        assert.equal(errorMsgText, 'Sorry, you might have entered the wrong code. Please try again or contact a member of the Cabin Crew.',
          'Error Message does not displayed');        

    });


    // after(() => driver && driver.quit());
});