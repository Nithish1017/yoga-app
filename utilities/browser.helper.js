import { Builder } from 'selenium-webdriver';
import chrome from 'selenium-webdriver/chrome.js';
import firefox from 'selenium-webdriver/firefox.js';
import edge from 'selenium-webdriver/edge.js';
import config from '../config/config.js';
import logger from './logger.js';

export class BrowserHelper {
    /**
     * Initializes and configures the Selenium WebDriver instance.
     * @returns {Promise<ThenableWebDriver>} Selenium WebDriver instance
     */
    static async getDriver() {
        const browserName = (process.env.BROWSER || config.browser).toLowerCase();
        const headless = process.env.HEADLESS !== undefined 
            ? process.env.HEADLESS === 'true' 
            : config.headless;
        
        logger.info(`Initializing WebDriver: Browser=[${browserName}], Headless=[${headless}]`);
        
        let builder = new Builder();
        
        if (browserName === 'chrome') {
            const options = new chrome.Options();
            options.addArguments('--no-sandbox');
            options.addArguments('--disable-dev-shm-usage');
            options.addArguments('--disable-gpu');
            options.addArguments('--window-size=1920,1080');
            options.addArguments('--disable-infobars');
            // Auto grant camera and microphone permissions for the webcam simulator
            options.addArguments('--use-fake-ui-for-media-stream');
            options.addArguments('--use-fake-device-for-media-stream');
            options.setUserPreferences({
                'profile.default_content_setting_values.media_stream_mic': 1,
                'profile.default_content_setting_values.media_stream_camera': 1,
                'profile.default_content_setting_values.geolocation': 1,
                'profile.default_content_setting_values.notifications': 1
            });
            if (headless) {
                options.addArguments('--headless=new');
            }
            builder = builder.forBrowser('chrome').setChromeOptions(options);
        } else if (browserName === 'firefox') {
            const options = new firefox.Options();
            options.addArguments('--width=1920');
            options.addArguments('--height=1080');
            // Auto grant camera permissions
            options.setPreference('media.navigator.permission.disabled', true);
            options.setPreference('media.navigator.streams.fake', true);
            if (headless) {
                options.addArguments('-headless');
            }
            builder = builder.forBrowser('firefox').setFirefoxOptions(options);
        } else if (browserName === 'edge') {
            const options = new edge.Options();
            options.addArguments('--no-sandbox');
            options.addArguments('--disable-dev-shm-usage');
            options.addArguments('--window-size=1920,1080');
            // Auto grant camera/microphone
            options.addArguments('--use-fake-ui-for-media-stream');
            options.addArguments('--use-fake-device-for-media-stream');
            if (headless) {
                options.addArguments('--headless=new');
            }
            builder = builder.forBrowser('edge').setEdgeOptions(options);
        } else {
            throw new Error(`Unsupported browser: ${browserName}`);
        }
        
        try {
            const driver = await builder.build();
            await driver.manage().setTimeouts({ 
                implicit: config.implicitWait,
                pageLoad: config.pageLoadTimeout
            });
            logger.info(`WebDriver successfully initialized for ${browserName}`);
            return driver;
        } catch (error) {
            logger.error(`Failed to initialize WebDriver: ${error.message}`);
            throw error;
        }
    }
}
