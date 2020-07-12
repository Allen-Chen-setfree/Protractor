
var wait = require('./../utility/helper.js');

//const addToCartBtn = element(by.xpath('//*[@id="atcRedesignId_btn"]'));
const addToCartBtn = element(by.xpath('//*[@id="isCartBtn_btn"]'));
//const goToCartBtn = element(by.linkText('Go to cart')); 
const goToCartBtn = element(by.xpath('//button[text()="No thanks"]'));


var Productpage = function() {


this.addToCart = function() {
           wait.untilClickable(addToCartBtn, 6000);
           return addToCartBtn.click();
        }

this.goToCart = function() {
           wait.untilClickable(goToCartBtn, 3000);
           return goToCartBtn.click();
        }

};
module.exports = new Productpage();