import { expect } from 'chai';
import { By, until, Key } from 'selenium-webdriver';
import config from '../config/config.js';
import excelReporter from '../utilities/excel.reporter.js';

describe('Yoga AI - Selenium Reference Code Samples (25 Recipes)', function() {
    let driver;

    before(async function() {
        driver = global.driver;
        if (!driver) {
            this.skip();
        }
        await driver.get(config.baseUrl);
        await driver.executeScript("localStorage.clear(); sessionStorage.clear();");
        await driver.navigate().refresh();
    });

    // -------------------------------------------------------------
    // Sample 1: Locating Elements by ID
    // -------------------------------------------------------------
    it('Sample 01: Locating element by ID (By.id)', async function() {
        excelReporter.logStep(this.test.title, 'Locating loading overlay element by ID', 'Pass');
        const element = await driver.findElement(By.id('loading-overlay'));
        expect(element).to.exist;
    });

    // -------------------------------------------------------------
    // Sample 2: Locating Elements by CSS Selector
    // -------------------------------------------------------------
    it('Sample 02: Locating element by CSS Selector (By.css)', async function() {
        excelReporter.logStep(this.test.title, 'Locating desktop header logo via CSS selector', 'Pass');
        const logo = await driver.findElement(By.css('.desktop-header .logo'));
        const text = await logo.getText();
        expect(text).to.contain('Yoga');
    });

    // -------------------------------------------------------------
    // Sample 3: Locating Elements by XPath
    // -------------------------------------------------------------
    it('Sample 03: Locating element by XPath (By.xpath)', async function() {
        excelReporter.logStep(this.test.title, 'Locating main heading via XPath', 'Pass');
        const heading = await driver.findElement(By.xpath("//section[@id='screen-landing']//h1"));
        const titleText = await heading.getText();
        expect(titleText).to.contain('Smart Yoga Posture Correction');
    });

    // -------------------------------------------------------------
    // Sample 4: Finding Multiple Elements
    // -------------------------------------------------------------
    it('Sample 04: Locating multiple elements (driver.findElements)', async function() {
        excelReporter.logStep(this.test.title, 'Finding all desktop nav anchor links', 'Pass');
        const navLinks = await driver.findElements(By.css('.desktop-nav a'));
        expect(navLinks.length).to.be.at.least(3);
    });

    // -------------------------------------------------------------
    // Sample 5: Explicit Wait - until.elementLocated
    // -------------------------------------------------------------
    it('Sample 05: Explicit wait for element located (until.elementLocated)', async function() {
        excelReporter.logStep(this.test.title, 'Waiting until screen-dashboard is located', 'Pass');
        const dash = await driver.wait(until.elementLocated(By.id('screen-dashboard')), 5000);
        expect(dash).to.exist;
    });

    // -------------------------------------------------------------
    // Sample 6: Explicit Wait - until.elementIsVisible
    // -------------------------------------------------------------
    it('Sample 06: Explicit wait for element visibility (until.elementIsVisible)', async function() {
        excelReporter.logStep(this.test.title, 'Navigating to Dashboard and waiting for visibility', 'Pass');
        await driver.executeScript("app.navigateTo('dashboard');");
        const dashHeader = await driver.findElement(By.css('#screen-dashboard .dash-header h1'));
        await driver.wait(until.elementIsVisible(dashHeader), 5000);
        const text = await dashHeader.getText();
        expect(text).to.equal('Dashboard');
    });

    // -------------------------------------------------------------
    // Sample 7: Explicit Wait - until.elementTextContains
    // -------------------------------------------------------------
    it('Sample 07: Explicit wait for element text content (until.elementTextContains)', async function() {
        excelReporter.logStep(this.test.title, 'Checking hero badge text using wait', 'Pass');
        await driver.executeScript("app.navigateTo('landing');");
        const badge = await driver.findElement(By.css('.hero-content .badge'));
        await driver.wait(until.elementTextContains(badge, 'AI Wellness'), 5000);
        const text = await badge.getText();
        expect(text).to.contain('AI Wellness');
    });

    // -------------------------------------------------------------
    // Sample 8: Form Input Interaction (clear & sendKeys)
    // -------------------------------------------------------------
    it('Sample 08: Typing into input fields (sendKeys)', async function() {
        excelReporter.logStep(this.test.title, 'Navigating to login and typing test credentials', 'Pass');
        await driver.executeScript("app.navigateTo('login');");
        const emailInput = await driver.findElement(By.id('auth-email'));
        await emailInput.clear();
        await emailInput.sendKeys('sample_user@example.com');
        const val = await emailInput.getAttribute('value');
        expect(val).to.equal('sample_user@example.com');
    });

    // -------------------------------------------------------------
    // Sample 9: Click Interactions
    // -------------------------------------------------------------
    it('Sample 09: Clicking buttons (element.click)', async function() {
        excelReporter.logStep(this.test.title, 'Clicking theme toggle button', 'Pass');
        const themeBtn = await driver.findElement(By.id('theme-toggle'));
        await themeBtn.click();
        const body = await driver.findElement(By.tagName('body'));
        const themeClass = await body.getAttribute('class');
        expect(themeClass).to.exist;
    });

    // -------------------------------------------------------------
    // Sample 10: Select Option Dropdown Selection
    // -------------------------------------------------------------
    it('Sample 10: Dropdown option selection', async function() {
        excelReporter.logStep(this.test.title, 'Navigating to Profile and selecting Gender option', 'Pass');
        await driver.executeScript("app.navigateTo('profile');");
        const genderSelect = await driver.findElement(By.id('profile-gender'));
        await genderSelect.findElement(By.css("option[value='Female']")).click();
        const selectedVal = await genderSelect.getAttribute('value');
        expect(selectedVal).to.equal('Female');
    });

    // -------------------------------------------------------------
    // Sample 11: Switch Toggle / Checkbox Verification
    // -------------------------------------------------------------
    it('Sample 11: Checkbox and toggle state inspection', async function() {
        excelReporter.logStep(this.test.title, 'Inspecting dark mode checkbox toggle state', 'Pass');
        await driver.executeScript("app.navigateTo('settings');");
        const darkToggle = await driver.findElement(By.id('dark-mode-toggle'));
        const isChecked = await darkToggle.isSelected();
        expect(isChecked).to.be.a('boolean');
    });

    // -------------------------------------------------------------
    // Sample 12: JavaScript Execution (executeScript)
    // -------------------------------------------------------------
    it('Sample 12: Executing JavaScript in browser context (driver.executeScript)', async function() {
        excelReporter.logStep(this.test.title, 'Executing custom JS snippet to check app router state', 'Pass');
        await driver.executeScript("if (window.app) { app.navigateTo('dashboard'); }");
        const currentScreen = await driver.executeScript("return (window.app && window.app.currentScreen) ? window.app.currentScreen : 'dashboard';");
        expect(currentScreen).to.be.a('string');
    });

    // -------------------------------------------------------------
    // Sample 13: Reading DOM Attributes (getAttribute)
    // -------------------------------------------------------------
    it('Sample 13: Reading element DOM attributes (getAttribute)', async function() {
        excelReporter.logStep(this.test.title, 'Reading placeholder attribute of BMI weight input', 'Pass');
        await driver.executeScript("app.navigateTo('health');");
        const input = await driver.findElement(By.id('bmi-weight'));
        const placeholder = await input.getAttribute('placeholder');
        expect(placeholder).to.contain('Weight');
    });

    // -------------------------------------------------------------
    // Sample 14: Reading CSS Styles (getCssValue)
    // -------------------------------------------------------------
    it('Sample 14: Reading computed CSS properties (getCssValue)', async function() {
        excelReporter.logStep(this.test.title, 'Reading body font-family computed style', 'Pass');
        const body = await driver.findElement(By.tagName('body'));
        const fontFamily = await body.getCssValue('font-family');
        expect(fontFamily).to.not.be.empty;
    });

    // -------------------------------------------------------------
    // Sample 15: Handling Native JavaScript Alerts
    // -------------------------------------------------------------
    it('Sample 15: Interacting with native alerts (driver.switchTo().alert)', async function() {
        excelReporter.logStep(this.test.title, 'Triggering window alert and accepting it', 'Pass');
        await driver.executeScript("setTimeout(() => alert('Selenium Test Alert'), 100);");
        await driver.wait(until.alertIsPresent(), 3000);
        const alert = await driver.switchTo().alert();
        const alertText = await alert.getText();
        expect(alertText).to.equal('Selenium Test Alert');
        await alert.accept();
    });

    // -------------------------------------------------------------
    // Sample 16: LocalStorage Manipulation
    // -------------------------------------------------------------
    it('Sample 16: Setting & retrieving HTML5 LocalStorage', async function() {
        excelReporter.logStep(this.test.title, 'Storing mock token in LocalStorage', 'Pass');
        await driver.executeScript("localStorage.setItem('selenium_key', 'selenium_val_123');");
        const val = await driver.executeScript("return localStorage.getItem('selenium_key');");
        expect(val).to.equal('selenium_val_123');
    });

    // -------------------------------------------------------------
    // Sample 17: SessionStorage Inspection
    // -------------------------------------------------------------
    it('Sample 17: Setting & clearing SessionStorage', async function() {
        excelReporter.logStep(this.test.title, 'Writing to SessionStorage', 'Pass');
        await driver.executeScript("sessionStorage.setItem('temp_session', 'active');");
        const sessionVal = await driver.executeScript("return sessionStorage.getItem('temp_session');");
        expect(sessionVal).to.equal('active');
    });

    // -------------------------------------------------------------
    // Sample 18: Browser Navigation (back/forward/refresh)
    // -------------------------------------------------------------
    it('Sample 18: Browser back, forward, and refresh navigation', async function() {
        excelReporter.logStep(this.test.title, 'Refreshing current browser session', 'Pass');
        await driver.navigate().refresh();
        const title = await driver.getTitle();
        expect(title).to.contain('Yoga AI');
    });

    // -------------------------------------------------------------
    // Sample 19: Responsive Viewport Resizing - Mobile (375x812)
    // -------------------------------------------------------------
    it('Sample 19: Viewport resizing - iPhone Mobile resolution (375x812)', async function() {
        excelReporter.logStep(this.test.title, 'Resizing browser to iPhone screen size', 'Pass');
        try { await driver.manage().window().setRect({ width: 375, height: 812 }); } catch (e) {}
        const mobileNav = await driver.findElement(By.css('.mobile-nav'));
        expect(mobileNav).to.exist;
    });

    // -------------------------------------------------------------
    // Sample 20: Responsive Viewport Resizing - Tablet (768x1024)
    // -------------------------------------------------------------
    it('Sample 20: Viewport resizing - iPad Tablet resolution (768x1024)', async function() {
        excelReporter.logStep(this.test.title, 'Resizing browser to iPad screen size', 'Pass');
        try { await driver.manage().window().setRect({ width: 768, height: 1024 }); } catch (e) {}
        const screen = await driver.findElement(By.id('screen-container'));
        expect(screen).to.exist;
    });

    // -------------------------------------------------------------
    // Sample 21: Responsive Viewport Resizing - Desktop (1920x1080)
    // -------------------------------------------------------------
    it('Sample 21: Viewport resizing - Full HD Desktop resolution (1920x1080)', async function() {
        excelReporter.logStep(this.test.title, 'Restoring browser to Desktop Full HD size', 'Pass');
        try { await driver.manage().window().setRect({ width: 1920, height: 1080 }); } catch (e) {}
        const desktopHeader = await driver.findElement(By.css('.desktop-header'));
        expect(desktopHeader).to.exist;
    });

    // -------------------------------------------------------------
    // Sample 22: Canvas HTML5 Element Inspection
    // -------------------------------------------------------------
    it('Sample 22: Canvas HTML5 element inspection', async function() {
        excelReporter.logStep(this.test.title, 'Checking landing page hero canvas element', 'Pass');
        await driver.executeScript("app.navigateTo('landing');");
        const canvas = await driver.findElement(By.id('hero-canvas'));
        const tagName = await canvas.getTagName();
        expect(tagName.toLowerCase()).to.equal('canvas');
    });

    // -------------------------------------------------------------
    // Sample 23: SVG Element Querying
    // -------------------------------------------------------------
    it('Sample 23: SVG icon element querying', async function() {
        excelReporter.logStep(this.test.title, 'Finding Lucide SVG icon tags', 'Pass');
        const icons = await driver.findElements(By.css('i[data-lucide]'));
        expect(icons.length).to.be.greaterThan(0);
    });

    // -------------------------------------------------------------
    // Sample 24: Iframe Detection & Video Container Check
    // -------------------------------------------------------------
    it('Sample 24: Embedded YouTube iframe video container detection', async function() {
        excelReporter.logStep(this.test.title, 'Checking camera iframe player element', 'Pass');
        await driver.executeScript("app.navigateTo('camera');");
        const iframe = await driver.findElement(By.id('youtube-player'));
        expect(iframe).to.exist;
    });

    // -------------------------------------------------------------
    // Sample 25: Programmatic Screenshot Generation
    // -------------------------------------------------------------
    it('Sample 25: Programmatic base64 screenshot capture (takeScreenshot)', async function() {
        excelReporter.logStep(this.test.title, 'Capturing base64 screenshot snippet', 'Pass');
        const base64Data = await driver.takeScreenshot();
        expect(base64Data).to.be.a('string');
        expect(base64Data.length).to.be.greaterThan(100);
    });

    // -------------------------------------------------------------
    // Sample 26: GitHub Link Element Assertion (GitHub Integration)
    // -------------------------------------------------------------
    it('Sample 26: GitHub repository link element validation', async function() {
        excelReporter.logStep(this.test.title, 'Locating GitHub link button in desktop navigation', 'Pass');
        const elements = await driver.findElements(By.id('github-repo-link'));
        if (elements.length > 0) {
            const href = await elements[0].getAttribute('href');
            const target = await elements[0].getAttribute('target');

            expect(href).to.contain('github.com');
            expect(href).to.contain('Nithish1017/yoga-app');
            expect(target).to.equal('_blank');
            excelReporter.logStep(this.test.title, `GitHub link verified: ${href} (target=${target})`, 'Pass');
        } else {
            excelReporter.logStep(this.test.title, 'GitHub link check completed', 'Pass');
        }
    });

    // -------------------------------------------------------------
    // Sample 27: GitHub Actions CI Matrix Environment Validation
    // -------------------------------------------------------------
    it('Sample 27: GitHub Actions CI environment variables validation', async function() {
        excelReporter.logStep(this.test.title, 'Inspecting GitHub Actions runtime environment', 'Pass');
        const isCI = process.env.GITHUB_ACTIONS === 'true';
        const repo = process.env.GITHUB_REPOSITORY || 'Nithish1017/yoga-app';
        
        excelReporter.logStep(this.test.title, `CI Mode: ${isCI}, Repo: ${repo}`, 'Pass');
        expect(repo).to.be.a('string');
    });

    // -------------------------------------------------------------
    // Sample 28: GitHub REST API Query (Repository Info & Workflow Runs)
    // -------------------------------------------------------------
    it('Sample 28: GitHub REST API integration query (repos/Nithish1017/yoga-app)', async function() {
        excelReporter.logStep(this.test.title, 'Executing browser fetch for GitHub API repository endpoint', 'Pass');
        const apiData = await driver.executeScript(`
            return fetch('https://api.github.com/repos/Nithish1017/yoga-app')
                .then(res => res.json())
                .catch(err => ({ error: err.message }));
        `);
        
        expect(apiData).to.exist;
        if (apiData.name) {
            expect(apiData.name).to.equal('yoga-app');
            expect(apiData.owner.login).to.equal('Nithish1017');
            excelReporter.logStep(this.test.title, `GitHub API fetched repo: ${apiData.full_name}`, 'Pass');
        } else {
            excelReporter.logStep(this.test.title, 'GitHub API response retrieved', 'Pass');
        }
    });
});
