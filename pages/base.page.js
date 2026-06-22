import { until, By } from 'selenium-webdriver';
import config from '../config/config.js';
import logger from '../utilities/logger.js';

export class BasePage {
    /**
     * @param {WebDriver} driver The Selenium WebDriver instance
     */
    constructor(driver) {
        this.driver = driver;
        this.timeout = config.explicitWait;
    }

    /**
     * Navigates to a specific URL
     * @param {string} url 
     */
    async navigateTo(url) {
        logger.info(`Navigating to URL: ${url}`);
        await this.driver.get(url);
    }

    /**
     * Waits for an element to be located and visible in the DOM
     * @param {By} locator 
     * @param {number} timeout 
     * @returns {Promise<WebElement>}
     */
    async findElement(locator, timeout = this.timeout) {
        try {
            await this.driver.wait(until.elementLocated(locator), timeout);
            const element = await this.driver.findElement(locator);
            await this.driver.wait(until.elementIsVisible(element), timeout);
            return element;
        } catch (e) {
            logger.error(`Element not found or visible: ${locator.toString()} within ${timeout}ms`);
            throw e;
        }
    }

    /**
     * Waits for multiple elements to be located in the DOM
     * @param {By} locator 
     * @param {number} timeout 
     * @returns {Promise<WebElement[]>}
     */
    async findElements(locator, timeout = this.timeout) {
        try {
            await this.driver.wait(until.elementsLocated(locator), timeout);
            return await this.driver.findElements(locator);
        } catch (e) {
            logger.warn(`Elements not located: ${locator.toString()} within ${timeout}ms. Returning empty array.`);
            return [];
        }
    }

    /**
     * Clicks an element with auto-retry and JS click fallback
     * @param {By} locator 
     * @param {number} timeout 
     */
    async click(locator, timeout = this.timeout) {
        try {
            const element = await this.findElement(locator, timeout);
            await this.driver.wait(until.elementToBeClickable(element), timeout);
            await element.click();
        } catch (e) {
            logger.warn(`Standard click failed on ${locator.toString()}, attempting JS click fallback...`);
            try {
                const element = await this.driver.findElement(locator);
                await this.driver.executeScript('arguments[0].click();', element);
            } catch (jsErr) {
                logger.error(`JS Click fallback failed: ${jsErr.message}`);
                throw e;
            }
        }
    }

    /**
     * Clears input and types text
     * @param {By} locator 
     * @param {string} text 
     * @param {boolean} clear 
     * @param {number} timeout 
     */
    async type(locator, text, clear = true, timeout = this.timeout) {
        const element = await this.findElement(locator, timeout);
        if (clear) {
            await element.clear();
        }
        await element.sendKeys(text);
    }

    /**
     * Retrieves visible text of element
     * @param {By} locator 
     * @param {number} timeout 
     * @returns {Promise<string>}
     */
    async getText(locator, timeout = this.timeout) {
        const element = await this.findElement(locator, timeout);
        return await element.getText();
    }

    /**
     * Retrieves element attribute value
     * @param {By} locator 
     * @param {string} attribute 
     * @param {number} timeout 
     * @returns {Promise<string>}
     */
    async getAttribute(locator, attribute, timeout = this.timeout) {
        const element = await this.findElement(locator, timeout);
        return await element.getAttribute(attribute);
    }

    /**
     * Scrolls element smoothly into the viewport center
     * @param {By} locator 
     * @param {number} timeout 
     */
    async scrollIntoView(locator, timeout = this.timeout) {
        const element = await this.findElement(locator, timeout);
        await this.driver.executeScript('arguments[0].scrollIntoView({ behavior: "smooth", block: "center" });', element);
    }

    /**
     * Safely waits for and accepts a standard browser alert dialog.
     * @returns {Promise<string>} Text content of the alert
     */
    async acceptAlert() {
        try {
            await this.driver.wait(until.alertIsPresent(), this.timeout);
            const alert = await this.driver.switchTo().alert();
            const text = await alert.getText();
            logger.info(`Accepting browser alert: "${text}"`);
            await alert.accept();
            return text;
        } catch (e) {
            logger.error(`No alert present to accept: ${e.message}`);
            throw e;
        }
    }

    /**
     * Returns true if element is displayed, false otherwise
     * @param {By} locator 
     * @param {number} timeout 
     * @returns {Promise<boolean>}
     */
    async isElementDisplayed(locator, timeout = 2000) {
        try {
            const element = await this.findElement(locator, timeout);
            return await element.isDisplayed();
        } catch (e) {
            return false;
        }
    }

    /**
     * Safely gets browser console logs
     * @returns {Promise<any[]>}
     */
    async getConsoleLogs() {
        try {
            return await this.driver.manage().logs().get('browser');
        } catch (e) {
            return [];
        }
    }
}
