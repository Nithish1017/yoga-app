import { BrowserHelper } from '../utilities/browser.helper.js';
import excelReporter from '../utilities/excel.reporter.js';
import { captureFailure } from '../utilities/screenshot.js';
import logger from '../utilities/logger.js';

let driver = null;

before(async function() {
    // Enable longer timeout for initialization
    this.timeout(60000);
    excelReporter.startSession();
    
    try {
        driver = await BrowserHelper.getDriver();
        global.driver = driver;
    } catch (e) {
        logger.error(`Failed to startup WebDriver: ${e.message}`);
        throw e;
    }
});

beforeEach(function() {
    this.testStartTime = new Date();
    const testTitle = this.currentTest ? this.currentTest.title : 'Unknown Test';
    excelReporter.logStep(testTitle, 'Test execution started', 'Pass');
});

afterEach(async function() {
    const test = this.currentTest;
    if (!test) return;

    const endTime = new Date();
    const startTime = this.testStartTime || new Date();
    const browserName = process.env.BROWSER || 'chrome';
    
    let status = 'Passed';
    
    if (test.state === 'failed') {
        status = 'Failed';
        let screenshotPath = '';
        if (driver) {
            screenshotPath = await captureFailure(driver, test.title, test.err);
        }
        
        let currentUrl = 'N/A';
        try {
            if (driver) currentUrl = await driver.getCurrentUrl();
        } catch (e) {}
        
        excelReporter.recordFailure(
            test.title,
            test.err ? test.err.message : 'Unknown error',
            screenshotPath,
            browserName,
            currentUrl
        );
        excelReporter.logStep(
            test.title, 
            `Assertion failed: ${test.err ? test.err.message : 'Unknown Error'}`, 
            'Fail', 
            test.err ? test.err.stack : ''
        );
    } else if (test.state === 'pending' || !test.state) {
        status = 'Skipped';
        excelReporter.logStep(test.title, 'Test was skipped', 'Pass', 'Skipped');
    } else {
        excelReporter.logStep(test.title, 'Test passed cleanly', 'Pass');
    }

    const moduleId = test.parent ? test.parent.title : 'General';
    const testId = 'TC_' + Math.random().toString(36).substring(2, 8).toUpperCase();
    
    excelReporter.recordTestCase(
        testId,
        moduleId,
        test.title,
        browserName,
        status,
        startTime,
        endTime
    );
});

after(async function() {
    this.timeout(30000);
    if (driver) {
        logger.info('Tearing down global WebDriver session...');
        try {
            await driver.quit();
        } catch (e) {
            logger.error(`Error while quitting driver: ${e.message}`);
        }
    }
    
    logger.info('Writing results to Excel report...');
    await excelReporter.generateReport();
});
export { driver };
