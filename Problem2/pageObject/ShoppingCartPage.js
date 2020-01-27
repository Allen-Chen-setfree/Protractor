

var wait = require('./../utility/helper.js');

const checkoutBtn = element(by.xpath('//button[text()="Go to checkout"]'));
const countiuneAsGuestBtn = element(by.xpath('//button[text()="Continue as a guest"]'));

var ShoppingCartpage = function() {


this.checkout = function() {
           wait.untilClickable(checkoutBtn, 5000);
           return checkoutBtn.click();
        }

this.countiuneAsGuest = function() {
           wait.untilClickable(countiuneAsGuestBtn, 5000);
           return countiuneAsGuestBtn.click();
        }

};
module.exports = new ShoppingCartpage();