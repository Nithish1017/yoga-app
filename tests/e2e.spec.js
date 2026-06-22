import { expect } from 'chai';
import config from '../config/config.js';
import { LoginPage } from '../pages/login.page.js';
import { DashboardPage } from '../pages/dashboard.page.js';
import { ProfilePage } from '../pages/profile.page.js';
import { HealthPage } from '../pages/health.page.js';
import { CameraPage } from '../pages/camera.page.js';
import excelReporter from '../utilities/excel.reporter.js';
import { By, until } from 'selenium-webdriver';

describe('Yoga AI - Static End-to-End Workflows', function() {
    let driver;
    let loginPage;
    let dashboardPage;
    let profilePage;
    let healthPage;
    let cameraPage;
    let uniqueEmail;

    before(function() {
        driver = global.driver;
        if (!driver) {
            this.skip();
        }
        loginPage = new LoginPage(driver);
        dashboardPage = new DashboardPage(driver);
        profilePage = new ProfilePage(driver);
        healthPage = new HealthPage(driver);
        cameraPage = new CameraPage(driver);
        
        uniqueEmail = `e2e_${Date.now()}@example.com`;
    });

    it('1. Authentication - Should reject invalid login credentials', async function() {
        excelReporter.logStep(this.test.title, 'Navigating to Login Page', 'Pass');
        await loginPage.navigateTo(config.baseUrl);
        
        excelReporter.logStep(this.test.title, 'Attempting login with invalid user details', 'Pass');
        await loginPage.login(config.testData.invalidUser.email, config.testData.invalidUser.password);
        
        excelReporter.logStep(this.test.title, 'Checking for error validation alert message', 'Pass');
        const isAlertShown = await loginPage.isErrorAlertDisplayed();
        expect(isAlertShown).to.be.true;
        
        const errMsg = await loginPage.getErrorMessage();
        expect(errMsg).to.not.be.empty;
        excelReporter.logStep(this.test.title, `Error Alert caught successfully: "${errMsg}"`, 'Pass');
    });

    it('2. Authentication - Should register new user and redirect to dashboard', async function() {
        excelReporter.logStep(this.test.title, 'Switching form mode to Registration', 'Pass');
        await loginPage.toggleAuthMode();
        
        excelReporter.logStep(this.test.title, 'Submitting new user details', 'Pass');
        await loginPage.register(
            config.testData.validUser.name, 
            uniqueEmail, 
            config.testData.validUser.password, 
            config.testData.validUser.password
        );
        
        excelReporter.logStep(this.test.title, 'Waiting for redirection to workspace Dashboard', 'Pass');
        // Redirection check
        await driver.wait(until.elementLocated(dashboardPage.dashHeader), 15000);
        const titleText = await dashboardPage.getDashboardTitle();
        expect(titleText).to.equal('Dashboard');
        
        excelReporter.logStep(this.test.title, 'User registration completed successfully', 'Pass');
    });

    it('3. UI & Theme - Should toggle theme interface modes', async function() {
        excelReporter.logStep(this.test.title, 'Toggling light/dark mode theme', 'Pass');
        const bodyTag = await driver.findElement(By.tagName('body'));
        const originalTheme = await bodyTag.getAttribute('data-theme') || 'light';
        
        await dashboardPage.toggleTheme();
        
        const toggledTheme = await bodyTag.getAttribute('data-theme');
        expect(toggledTheme).to.not.equal(originalTheme);
        excelReporter.logStep(this.test.title, `Theme changed from "${originalTheme}" to "${toggledTheme}"`, 'Pass');
        
        // Revert theme back
        await dashboardPage.toggleTheme();
    });

    it('4. Practice Flow - Should execute custom yoga practice session', async function() {
        excelReporter.logStep(this.test.title, 'Starting recommended posture from dashboard', 'Pass');
        await dashboardPage.startRecommendedPose();
        
        excelReporter.logStep(this.test.title, 'Verifying camera page loaded', 'Pass');
        await driver.wait(until.elementLocated(cameraPage.cameraScreen), 10000);
        
        const initialInstruction = await cameraPage.getInstructionText();
        expect(initialInstruction).to.contain('posture video');
        
        excelReporter.logStep(this.test.title, 'Clicking Start Session to begin practice', 'Pass');
        await cameraPage.clickSessionBtn();
        
        // Let it run for 1 second
        await driver.sleep(1000);
        
        const activeInstruction = await cameraPage.getInstructionText();
        expect(activeInstruction).to.contain('Detected');
        
        excelReporter.logStep(this.test.title, 'Stopping practice session and saving log', 'Pass');
        await cameraPage.clickSessionBtn(); // Click again to stop (triggers saveSession API)
        
        await driver.wait(until.elementLocated(dashboardPage.dashHeader), 10000);
        excelReporter.logStep(this.test.title, 'Practice session saved and returned to Dashboard', 'Pass');
    });

    it('5. Health Tracker - Should update water intake and calculate BMI', async function() {
        excelReporter.logStep(this.test.title, 'Navigating to Health page', 'Pass');
        await dashboardPage.navigateToHealth();
        
        excelReporter.logStep(this.test.title, 'Adding 250ml water intake', 'Pass');
        const originalWaterText = await healthPage.getWaterText();
        await healthPage.addWater();
        
        const updatedWaterText = await healthPage.getWaterText();
        expect(updatedWaterText).to.not.equal(originalWaterText);
        excelReporter.logStep(this.test.title, `Water intake updated: from "${originalWaterText}" to "${updatedWaterText}"`, 'Pass');

        excelReporter.logStep(this.test.title, 'Calculating Body Mass Index (BMI)', 'Pass');
        await healthPage.calculateBMI(70, 175); // weight=70, height=175
        
        const bmiText = await healthPage.getBmiResult();
        expect(bmiText).to.contain('Your BMI is 22.9');
        excelReporter.logStep(this.test.title, `BMI Result read: "${bmiText}"`, 'Pass');
        
        excelReporter.logStep(this.test.title, 'Verifying session practice recorded in history log', 'Pass');
        const firstRecord = await healthPage.getFirstHistoryRecord();
        expect(firstRecord).to.not.be.null;
        expect(firstRecord.pose).to.equal('Vajrasana');
        excelReporter.logStep(this.test.title, `Found logged practice in history: ${JSON.stringify(firstRecord)}`, 'Pass');
    });

    it('6. Profile Management - Should update user profile fields and persist', async function() {
        excelReporter.logStep(this.test.title, 'Navigating to Profile details page', 'Pass');
        await dashboardPage.navigateToProfile();
        
        excelReporter.logStep(this.test.title, 'Updating name, age, mobile and health variables', 'Pass');
        await profilePage.fillProfile(
            config.testData.validUser.name + ' Updated',
            config.testData.validUser.mobile,
            config.testData.validUser.age,
            config.testData.validUser.gender,
            config.testData.validUser.diabeticType
        );
        
        excelReporter.logStep(this.test.title, 'Saving profile details', 'Pass');
        await profilePage.saveProfile();
        
        // Wait for browser window alert confirm response
        const alertMsg = await profilePage.acceptAlert();
        expect(alertMsg).to.contain('successfully');
        
        excelReporter.logStep(this.test.title, 'Verifying redirection to dashboard after saving', 'Pass');
        await driver.wait(until.elementLocated(dashboardPage.dashHeader), 10000);
        
        excelReporter.logStep(this.test.title, 'Double checking profile values by navigating back', 'Pass');
        await dashboardPage.navigateToProfile();
        
        const nameVal = await driver.findElement(profilePage.profileName).getAttribute('value');
        expect(nameVal).to.equal(config.testData.validUser.name + ' Updated');
        excelReporter.logStep(this.test.title, 'Profile persistent data verified successfully', 'Pass');
    });

    it('7. Authentication - Should log out successfully', async function() {
        excelReporter.logStep(this.test.title, 'Clicking Logout button in header', 'Pass');
        await dashboardPage.logout();
        
        excelReporter.logStep(this.test.title, 'Verifying redirection to Login screen', 'Pass');
        await driver.wait(until.elementLocated(loginPage.emailInput), 10000);
        
        const isEmailDisplayed = await loginPage.isElementDisplayed(loginPage.emailInput);
        expect(isEmailDisplayed).to.be.true;
        excelReporter.logStep(this.test.title, 'User logged out and returned to authentication screen', 'Pass');
    });
});
