exports.config = {

  seleniumAddress: 'http://localhost:4444/wd/hub',

      capabilities: {
        browserName:'chrome',
        args: ['no-sandbox']
    },

  // set to "custom" instead of cucumber.
  framework: 'custom',

  // path relative to the current config file
  frameworkPath: require.resolve('protractor-cucumber-framework'),

  // require feature files
  specs: [
    './features/purchase.feature' // accepts a glob
  ],

  cucumberOpts: {
    // require step definitions
    require: [
      './steps/purchase.js' // accepts a glob
    ]
  }
  ,

      onPrepare: function () {
        
        browser.manage().window().maximize(); // maximize the browser before executing the feature files
        return browser.waitForAngularEnabled(false);
    }
    ,
    getPageTimeout: 30000,
    allScriptsTimeout: 30000
};