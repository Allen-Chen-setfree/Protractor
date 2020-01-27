 


var {Given, When, Then} = require('cucumber');
var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');

chai.use(chaiAsPromised);
var expect = chai.expect;

var eBayHomepage = require('./../pageObject/HomePage.js');
var searchPage = require('./../pageObject/SearchedResultsPage.js');
var productPage = require('./../pageObject/ProductPage.js');
var shoppingCartPage = require('./../pageObject/ShoppingCartPage.js');
var checkoutPage = require('./../pageObject/CheckoutPage.js');


         Given('I am on eBay homepage', {timeout: 30 * 1000}, function () {  

             return eBayHomepage.get();
         });


         When('I search an item', {timeout: 30 * 1000}, function () {
            
            var keyword = 'white bookshelf\n';
            return eBayHomepage.search(keyword);  
  
         });

         When('click one of the search results', {timeout: 30 * 1000}, function () {


            var index = 1;
            return searchPage.select(index);

         });



         When('add it to cart', {timeout: 30 * 1000}, function () {

           productPage.addToCart();
           return productPage.goToCart();


         });


         Then('I should be able to check it out', {timeout: 30 * 1000}, function () {

          shoppingCartPage.checkout();
          return shoppingCartPage.countiuneAsGuest();


         });

         Then('I should be able to input postal address', {timeout: 30 * 1000}, function () {
          return checkoutPage.inputPostalAdd();
         });


          Then('I should be able to input payment details', {timeout: 30 * 1000}, function () {
          return checkoutPage.inputPaymentDetails();
         });


         Then('I should be able to confirm and pay', {timeout: 30 * 1000}, function () {
          return checkoutPage.confirm();
         });

