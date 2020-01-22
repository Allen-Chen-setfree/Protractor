 


var {Given, When, Then} = require('cucumber');
var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
var EC = protractor.ExpectedConditions;

chai.use(chaiAsPromised);
var expect = chai.expect;

var homePage = require('./../pageObject/HomePage.js');


         Given('I am on eBay homepage', function () {  
              var eBayHomepage = new homePage();
             return eBayHomepage.get();
         });


         When('I search an item', function () {
            browser.findElement(by.xpath('//*[@id="gh-ac"]')).sendKeys('white bookshelf\n');
            return browser.findElement(by.xpath('//*[@id="gh-btn"]')).click();
         });


         When('add it to cart', function () {
           browser.waitForAngularEnabled(false);

           browser.findElement(by.xpath('(//a[@class="s-item__link"])[1]')).click();    
           browser.findElement(by.xpath('//*[@id="atcRedesignId_btn"]')).click();
           return browser.findElement(by.linkText('Go to cart')).click();


         });


         Then('I should be able to check it out', function () {

          browser.findElement(by.xpath('//button[text()="Go to checkout"]')).click();
          return browser.findElement(by.xpath('//button[text()="Continue as a guest"]')).click();

         });

         Then('I should be able to input post address', function () {

          browser.findElement(by.xpath('//input[@name="firstName"]')).sendKeys('test1');
          browser.findElement(by.xpath('//input[@name="lastName"]')).sendKeys('test2');
          browser.findElement(by.xpath('//input[@name="addressLine1"]')).sendKeys('test3');
          browser.findElement(by.id('stateOrProvince')).click();
          browser.findElement(by.xpath('//option[text()="Victoria"]')).click();
          browser.findElement(by.xpath('//input[@name="city"]')).sendKeys('test');
          browser.findElement(by.xpath('//input[@name="postalCode"]')).sendKeys('test');
          browser.findElement(by.xpath('//input[@name="email"]')).sendKeys('test');
          browser.findElement(by.xpath('//input[@name="emailConfirm"]')).sendKeys('test');    
          browser.findElement(by.xpath('//input[@name="phoneNumber"]')).sendKeys('test');
          return browser.findElement(by.xpath('//button[text()="Done"]')).click();

         });


          Then('I should be able to input payment details', function () {
          browser.findElement(by.xpath('//fieldset[@id="payment-selection-fieldset"]//*[contains(@class,"payment-entry--CC")]//input')).click();          


          browser.findElement(by.xpath('//input[@name="cardNumber"]')).sendKeys('5217295265197834');
          browser.findElement(by.xpath('//input[@name="cardExpiryDate"]')).sendKeys('0321');

          browser.findElement(by.xpath('//input[@name="securityCode"]')).sendKeys('123');
          return browser.findElement(by.xpath('//button[text()="Done"]')).click();

         });


         Then('I should be able to confirm and pay', function () {
         return browser.findElement(by.xpath('//button[span[text()="Confirm and pay"]]')).click();
         });

