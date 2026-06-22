import fs from 'fs';
import path from 'path';
import config from '../config/config.js';
import logger from './logger.js';

/**
 * Capture screenshots and page details on failure.
 * @param {WebDriver} driver Selenium WebDriver instance
 * @param {string} testName The name of the failed test
 * @param {Error} error The error thrown
 * @returns {Promise<string|null>} Path to the saved screenshot, or null if failed
 */
export async function captureFailure(driver, testName, error) {
    try {
        const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
        const sanitizedTestName = testName.replace(/[^a-zA-Z0-9_-]/g, '_');
        const filePrefix = `${sanitizedTestName}_${timestamp}`;

        // Ensure directories exist
        const failuresDir = config.paths.failures;
        if (!fs.existsSync(failuresDir)) {
            fs.mkdirSync(failuresDir, { recursive: true });
        }

        const screenshotPath = path.join(failuresDir, `${filePrefix}.png`);
        const detailsPath = path.join(failuresDir, `${filePrefix}_details.json`);

        logger.error(`Test Failure captured: "${testName}". Capturing page state...`);

        // 1. Take Screenshot
        let screenshotData;
        try {
            screenshotData = await driver.takeScreenshot();
            fs.writeFileSync(screenshotPath, screenshotData, 'base64');
            logger.info(`Saved screenshot to: ${screenshotPath}`);
        } catch (screenshotErr) {
            logger.error(`Failed to capture screenshot: ${screenshotErr.message}`);
        }

        // 2. Get current URL
        let currentUrl = 'N/A';
        try {
            currentUrl = await driver.getCurrentUrl();
        } catch (urlErr) {
            logger.warn(`Could not fetch current URL: ${urlErr.message}`);
        }

        // 3. Get Browser Console Logs (Safe wrapper as Geckodriver/Firefox may not support this)
        let consoleLogs = [];
        try {
            const browserLogs = await driver.manage().logs().get('browser');
            consoleLogs = browserLogs.map(log => ({
                timestamp: new Date(log.timestamp).toISOString(),
                level: log.level.name,
                message: log.message
            }));
        } catch (logsErr) {
            logger.debug(`Could not retrieve browser logs: ${logsErr.message}`);
            consoleLogs = [`Unable to retrieve browser logs for this driver: ${logsErr.message}`];
        }

        // 4. Save metadata JSON file
        const failureDetails = {
            testName,
            timestamp: new Date().toISOString(),
            currentUrl,
            error: {
                message: error.message,
                stack: error.stack
            },
            browserConsoleLogs: consoleLogs
        };

        fs.writeFileSync(detailsPath, JSON.stringify(failureDetails, null, 2), 'utf-8');
        logger.info(`Saved failure details to: ${detailsPath}`);

        return screenshotPath;
    } catch (err) {
        logger.error(`Critical error inside captureFailure: ${err.message}`);
        return null;
    }
}
