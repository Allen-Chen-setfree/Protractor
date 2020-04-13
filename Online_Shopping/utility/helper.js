
var EC = protractor.ExpectedConditions;


var Until = function() {


this.untilDisplay = function(ele, time) {
			browser.wait(EC.presenceOf(ele), time, 'Element taking too long to appear in the DOM');
        }

this.untilClickable = function(ele, time) {
			browser.wait(EC.elementToBeClickable(ele), time);
	
}


this.untilInvisibilityOf = function(ele, time) {
			browser.wait(EC.invisibilityOf(ele), time);
	
}


};
module.exports = new Until();