var wait = require('./../utility/helper.js');

const mainContent = element(by.id('mainContent'));


var Searchpage = function() {


this.select = function(index) {
			wait.untilDisplay(mainContent, 15000);
            return mainContent.all(by.className('s-item__link')).get(index).click();

        };

};
module.exports = new Searchpage();