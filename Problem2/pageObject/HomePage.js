
var wait = require('./../utility/helper.js');



const inputKeyword = element(by.id('gh-ac'));
const searchButton = element(by.id('gh-btn'));


var Homepage = function() {

this.get = function() {
    return browser.get('https://www.ebay.com.au/');
  };

this.search = function(keyword) {

	wait.untilDisplay(inputKeyword, 5000);
	inputKeyword.sendKeys(keyword);
	return searchButton.click();
  };

};
module.exports = new Homepage();

