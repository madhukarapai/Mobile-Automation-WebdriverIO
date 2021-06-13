let chai = require("chai")
const allure = require('allure-commandline')

exports.config = {
    runner:'local',
    port:4723,
    host:'localhost',
    path:'/wd/hub',
    loglevel:'info',
    framework:'mocha',
    mochaOpts:{
        ui:'bdd',
        require:['@babel/register'],
        timeout:600000

    },
    waitforTimeout:10000,
    maxInstances:1,
    sync:true,
    specs:[
       // './PlayWithMocha.js'
       //'./api/click.js'
       //'./api/setValue.js'
       //'./api//addValue.js'
      // './api/getText.js'
      //'./api/switch.js'
      //'./api/waitForDisplayed.js'
     // './api/saveScreenShot.js'
     //'./api/swipeVertical.js'
     //'./api/swipeHorizontal.js'
     //'./src/test_scripts/account/TC_001_Login.js'
     //'./src/test_scripts/account/TC_006_Login_WithCommonFlow.js'
     './src/test_scripts/account/TC_001_Login.js'
    ],
    reporters: [['allure', {
        outputDir: 'allure-results',
        disableWebdriverStepsReporting: true,
        disableWebdriverScreenshotsReporting: true,
        issueLinkTemplate: "https://mybug-tracker/{}",
        tmsLinkTemplate: "https://my-tms/{}"
    }]
],
    before:function(){
        global.chaiExpect=chai.expect
    },
    onComplete: function() {
        const reportError = new Error('Could not generate Allure report')
        const generation = allure(['generate', 'allure-results', '--clean'])
        return new Promise((resolve, reject) => {
            const generationTimeout = setTimeout(
                () => reject(reportError),
                5000)

            generation.on('exit', function(exitCode) {
                clearTimeout(generationTimeout)

                if (exitCode !== 0) {
                    return reject(reportError)
                }

                console.log('Allure report successfully generated')
                resolve()
            })
        })
    },
    afterStep: function (test, scenario, { error, duration, passed }) {
        if (error) {
          browser.takeScreenshot();
        }
      }
}