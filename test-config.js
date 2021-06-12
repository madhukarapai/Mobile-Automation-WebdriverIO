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
    maxInstances:1,
    sync:true,
    specs:[
        './PlayWithMocha.js'
    ],
    capabilties:[{
        "platformName": "Android",
        "automationName": "UIAutomator2",
        "udid": "emulator-5554",
        "appPackage": "com.wdiodemoapp",
        "appActivity": ".MainActivity"
      }]
}