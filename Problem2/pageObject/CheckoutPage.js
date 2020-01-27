

var wait = require('./../utility/helper.js');

const firstName = element(by.xpath('//input[@name="firstName"]'));
const lastName = element(by.xpath('//input[@name="lastName"]'));
const addressLine1 = element(by.xpath('//input[@name="addressLine1"]'));
const stateOrProvince = element(by.id('stateOrProvince'));
const Victoria_option = element(by.xpath('//option[text()="Victoria"]'));
const city = element(by.xpath('//input[@name="city"]'));
const postalCode= element(by.xpath('//input[@name="postalCode"]'));
const email= element(by.xpath('//input[@name="email"]'));
const emailConfirm = element(by.xpath('//input[@name="emailConfirm"]'));
const phoneNumber = element(by.xpath('//input[@name="phoneNumber"]'));
const doneBtn = element(by.xpath('//button[text()="Done"]'));

const paymentCC = element(by.xpath('//fieldset[@id="payment-selection-fieldset"]//*[contains(@class,"payment-entry--CC")]/div/span'));
const cardNumber = element(by.xpath('//input[@name="cardNumber"]'));
const cardExpiryDate = element(by.xpath('//input[@name="cardExpiryDate"]'));
const securityCode = element(by.xpath('//input[@name="securityCode"]'));

const confirmBtn = element(by.xpath('//button[span[text()="Confirm and pay"]]'));

var Checkoutpage = function() {


this.inputPostalAdd = function() {
          wait.untilClickable(firstName, 50000);

          firstName.sendKeys('test1');
          lastName.sendKeys('test2');
          addressLine1.sendKeys('test3');
          stateOrProvince.click();
          Victoria_option.click();
          city.sendKeys('test');
          postalCode.sendKeys('3000');
          email.sendKeys('test@test.com');
          emailConfirm.sendKeys('test@test.com');    
          phoneNumber.sendKeys('012345678');
          return doneBtn.click();
        }

this.inputPaymentDetails = function() {
          wait.untilClickable(paymentCC, 10000);
          paymentCC.click();          

          wait.untilClickable(cardNumber, 5000);
          cardNumber.sendKeys('5217295265197834');
          cardExpiryDate.sendKeys('0321');

          securityCode.sendKeys('123');
          return doneBtn.click();
        }

this.confirm = function() {
         wait.untilClickable(confirmBtn, 10000);
         return confirmBtn.click();
}

};
module.exports = new Checkoutpage();