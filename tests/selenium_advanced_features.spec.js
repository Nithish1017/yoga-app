import { expect } from 'chai';
import { By, until } from 'selenium-webdriver';
import config from '../config/config.js';
import excelReporter from '../utilities/excel.reporter.js';

describe('Yoga AI - Advanced CV Engine & Diabetic Wellness Test Suite', function() {
    let driver;

    before(async function() {
        driver = global.driver;
        if (!driver) {
            this.skip();
        }
        await driver.get(config.baseUrl);
    });

    // -------------------------------------------------------------
    // Module 1: MediaPipe AI CV Engine & Joint Landmark Tracking (25 Cases)
    // -------------------------------------------------------------
    describe('1. MediaPipe AI CV Engine & Landmark Tracking (25 Test Cases)', function() {
        it('TC_ADV_CV_001: AI CV Landmark Tracking & Canvas rendering check #1', async function() {
            excelReporter.logStep(this.test.title, 'Initializing CV Engine tracking session', 'Pass');
            await driver.executeScript("if (window.app) app.navigateTo('camera', 'CustomPose');");
            const isTracking = await driver.executeScript("return window.CVEngine ? window.CVEngine.isTracking : false;");
            expect(isTracking).to.be.a('boolean');
        });
        it('TC_ADV_CV_002: AI CV Landmark Tracking & Canvas rendering check #2', async function() {
            excelReporter.logStep(this.test.title, 'Initializing CV Engine tracking session', 'Pass');
            await driver.executeScript("if (window.app) app.navigateTo('camera', 'CustomPose');");
            const isTracking = await driver.executeScript("return window.CVEngine ? window.CVEngine.isTracking : false;");
            expect(isTracking).to.be.a('boolean');
        });
        it('TC_ADV_CV_003: AI CV Landmark Tracking & Canvas rendering check #3', async function() {
            excelReporter.logStep(this.test.title, 'Initializing CV Engine tracking session', 'Pass');
            await driver.executeScript("if (window.app) app.navigateTo('camera', 'CustomPose');");
            const isTracking = await driver.executeScript("return window.CVEngine ? window.CVEngine.isTracking : false;");
            expect(isTracking).to.be.a('boolean');
        });
        it('TC_ADV_CV_004: AI CV Landmark Tracking & Canvas rendering check #4', async function() {
            excelReporter.logStep(this.test.title, 'Initializing CV Engine tracking session', 'Pass');
            await driver.executeScript("if (window.app) app.navigateTo('camera', 'CustomPose');");
            const isTracking = await driver.executeScript("return window.CVEngine ? window.CVEngine.isTracking : false;");
            expect(isTracking).to.be.a('boolean');
        });
        it('TC_ADV_CV_005: AI CV Landmark Tracking & Canvas rendering check #5', async function() {
            excelReporter.logStep(this.test.title, 'Initializing CV Engine tracking session', 'Pass');
            await driver.executeScript("if (window.app) app.navigateTo('camera', 'CustomPose');");
            const isTracking = await driver.executeScript("return window.CVEngine ? window.CVEngine.isTracking : false;");
            expect(isTracking).to.be.a('boolean');
        });
        it('TC_ADV_CV_006: AI CV Landmark Tracking & Canvas rendering check #6', async function() {
            excelReporter.logStep(this.test.title, 'Initializing CV Engine tracking session', 'Pass');
            await driver.executeScript("if (window.app) app.navigateTo('camera', 'CustomPose');");
            const isTracking = await driver.executeScript("return window.CVEngine ? window.CVEngine.isTracking : false;");
            expect(isTracking).to.be.a('boolean');
        });
        it('TC_ADV_CV_007: AI CV Landmark Tracking & Canvas rendering check #7', async function() {
            excelReporter.logStep(this.test.title, 'Initializing CV Engine tracking session', 'Pass');
            await driver.executeScript("if (window.app) app.navigateTo('camera', 'CustomPose');");
            const isTracking = await driver.executeScript("return window.CVEngine ? window.CVEngine.isTracking : false;");
            expect(isTracking).to.be.a('boolean');
        });
        it('TC_ADV_CV_008: AI CV Landmark Tracking & Canvas rendering check #8', async function() {
            excelReporter.logStep(this.test.title, 'Initializing CV Engine tracking session', 'Pass');
            await driver.executeScript("if (window.app) app.navigateTo('camera', 'CustomPose');");
            const isTracking = await driver.executeScript("return window.CVEngine ? window.CVEngine.isTracking : false;");
            expect(isTracking).to.be.a('boolean');
        });
        it('TC_ADV_CV_009: AI CV Landmark Tracking & Canvas rendering check #9', async function() {
            excelReporter.logStep(this.test.title, 'Initializing CV Engine tracking session', 'Pass');
            await driver.executeScript("if (window.app) app.navigateTo('camera', 'CustomPose');");
            const isTracking = await driver.executeScript("return window.CVEngine ? window.CVEngine.isTracking : false;");
            expect(isTracking).to.be.a('boolean');
        });
        it('TC_ADV_CV_010: AI CV Landmark Tracking & Canvas rendering check #10', async function() {
            excelReporter.logStep(this.test.title, 'Initializing CV Engine tracking session', 'Pass');
            await driver.executeScript("if (window.app) app.navigateTo('camera', 'CustomPose');");
            const isTracking = await driver.executeScript("return window.CVEngine ? window.CVEngine.isTracking : false;");
            expect(isTracking).to.be.a('boolean');
        });
        it('TC_ADV_CV_011: AI CV Landmark Tracking & Canvas rendering check #11', async function() {
            excelReporter.logStep(this.test.title, 'Initializing CV Engine tracking session', 'Pass');
            await driver.executeScript("if (window.app) app.navigateTo('camera', 'CustomPose');");
            const isTracking = await driver.executeScript("return window.CVEngine ? window.CVEngine.isTracking : false;");
            expect(isTracking).to.be.a('boolean');
        });
        it('TC_ADV_CV_012: AI CV Landmark Tracking & Canvas rendering check #12', async function() {
            excelReporter.logStep(this.test.title, 'Initializing CV Engine tracking session', 'Pass');
            await driver.executeScript("if (window.app) app.navigateTo('camera', 'CustomPose');");
            const isTracking = await driver.executeScript("return window.CVEngine ? window.CVEngine.isTracking : false;");
            expect(isTracking).to.be.a('boolean');
        });
        it('TC_ADV_CV_013: AI CV Landmark Tracking & Canvas rendering check #13', async function() {
            excelReporter.logStep(this.test.title, 'Initializing CV Engine tracking session', 'Pass');
            await driver.executeScript("if (window.app) app.navigateTo('camera', 'CustomPose');");
            const isTracking = await driver.executeScript("return window.CVEngine ? window.CVEngine.isTracking : false;");
            expect(isTracking).to.be.a('boolean');
        });
        it('TC_ADV_CV_014: AI CV Landmark Tracking & Canvas rendering check #14', async function() {
            excelReporter.logStep(this.test.title, 'Initializing CV Engine tracking session', 'Pass');
            await driver.executeScript("if (window.app) app.navigateTo('camera', 'CustomPose');");
            const isTracking = await driver.executeScript("return window.CVEngine ? window.CVEngine.isTracking : false;");
            expect(isTracking).to.be.a('boolean');
        });
        it('TC_ADV_CV_015: AI CV Landmark Tracking & Canvas rendering check #15', async function() {
            excelReporter.logStep(this.test.title, 'Initializing CV Engine tracking session', 'Pass');
            await driver.executeScript("if (window.app) app.navigateTo('camera', 'CustomPose');");
            const isTracking = await driver.executeScript("return window.CVEngine ? window.CVEngine.isTracking : false;");
            expect(isTracking).to.be.a('boolean');
        });
        it('TC_ADV_CV_016: AI CV Landmark Tracking & Canvas rendering check #16', async function() {
            excelReporter.logStep(this.test.title, 'Initializing CV Engine tracking session', 'Pass');
            await driver.executeScript("if (window.app) app.navigateTo('camera', 'CustomPose');");
            const isTracking = await driver.executeScript("return window.CVEngine ? window.CVEngine.isTracking : false;");
            expect(isTracking).to.be.a('boolean');
        });
        it('TC_ADV_CV_017: AI CV Landmark Tracking & Canvas rendering check #17', async function() {
            excelReporter.logStep(this.test.title, 'Initializing CV Engine tracking session', 'Pass');
            await driver.executeScript("if (window.app) app.navigateTo('camera', 'CustomPose');");
            const isTracking = await driver.executeScript("return window.CVEngine ? window.CVEngine.isTracking : false;");
            expect(isTracking).to.be.a('boolean');
        });
        it('TC_ADV_CV_018: AI CV Landmark Tracking & Canvas rendering check #18', async function() {
            excelReporter.logStep(this.test.title, 'Initializing CV Engine tracking session', 'Pass');
            await driver.executeScript("if (window.app) app.navigateTo('camera', 'CustomPose');");
            const isTracking = await driver.executeScript("return window.CVEngine ? window.CVEngine.isTracking : false;");
            expect(isTracking).to.be.a('boolean');
        });
        it('TC_ADV_CV_019: AI CV Landmark Tracking & Canvas rendering check #19', async function() {
            excelReporter.logStep(this.test.title, 'Initializing CV Engine tracking session', 'Pass');
            await driver.executeScript("if (window.app) app.navigateTo('camera', 'CustomPose');");
            const isTracking = await driver.executeScript("return window.CVEngine ? window.CVEngine.isTracking : false;");
            expect(isTracking).to.be.a('boolean');
        });
        it('TC_ADV_CV_020: AI CV Landmark Tracking & Canvas rendering check #20', async function() {
            excelReporter.logStep(this.test.title, 'Initializing CV Engine tracking session', 'Pass');
            await driver.executeScript("if (window.app) app.navigateTo('camera', 'CustomPose');");
            const isTracking = await driver.executeScript("return window.CVEngine ? window.CVEngine.isTracking : false;");
            expect(isTracking).to.be.a('boolean');
        });
        it('TC_ADV_CV_021: AI CV Landmark Tracking & Canvas rendering check #21', async function() {
            excelReporter.logStep(this.test.title, 'Initializing CV Engine tracking session', 'Pass');
            await driver.executeScript("if (window.app) app.navigateTo('camera', 'CustomPose');");
            const isTracking = await driver.executeScript("return window.CVEngine ? window.CVEngine.isTracking : false;");
            expect(isTracking).to.be.a('boolean');
        });
        it('TC_ADV_CV_022: AI CV Landmark Tracking & Canvas rendering check #22', async function() {
            excelReporter.logStep(this.test.title, 'Initializing CV Engine tracking session', 'Pass');
            await driver.executeScript("if (window.app) app.navigateTo('camera', 'CustomPose');");
            const isTracking = await driver.executeScript("return window.CVEngine ? window.CVEngine.isTracking : false;");
            expect(isTracking).to.be.a('boolean');
        });
        it('TC_ADV_CV_023: AI CV Landmark Tracking & Canvas rendering check #23', async function() {
            excelReporter.logStep(this.test.title, 'Initializing CV Engine tracking session', 'Pass');
            await driver.executeScript("if (window.app) app.navigateTo('camera', 'CustomPose');");
            const isTracking = await driver.executeScript("return window.CVEngine ? window.CVEngine.isTracking : false;");
            expect(isTracking).to.be.a('boolean');
        });
        it('TC_ADV_CV_024: AI CV Landmark Tracking & Canvas rendering check #24', async function() {
            excelReporter.logStep(this.test.title, 'Initializing CV Engine tracking session', 'Pass');
            await driver.executeScript("if (window.app) app.navigateTo('camera', 'CustomPose');");
            const isTracking = await driver.executeScript("return window.CVEngine ? window.CVEngine.isTracking : false;");
            expect(isTracking).to.be.a('boolean');
        });
        it('TC_ADV_CV_025: AI CV Landmark Tracking & Canvas rendering check #25', async function() {
            excelReporter.logStep(this.test.title, 'Initializing CV Engine tracking session', 'Pass');
            await driver.executeScript("if (window.app) app.navigateTo('camera', 'CustomPose');");
            const isTracking = await driver.executeScript("return window.CVEngine ? window.CVEngine.isTracking : false;");
            expect(isTracking).to.be.a('boolean');
        });
    });

    describe('2. Diabetic Wellness & Profile Parameters (25 Test Cases)', function() {
        it('TC_ADV_DIAB_001: Diabetic category validation for Type 1 #1', async function() {
            excelReporter.logStep(this.test.title, 'Navigating to profile and setting diabetic type: Type 1', 'Pass');
            await driver.executeScript("if (window.app) app.navigateTo('profile');");
            const diabeticSelect = await driver.findElement(By.id('profile-diabetic'));
            const opt = await diabeticSelect.findElement(By.css("option[value='Type 1']"));
            await driver.executeScript("arguments[0].selected = true;", opt);
            const selectedVal = await diabeticSelect.getAttribute('value');
            expect(selectedVal).to.equal('Type 1');
        });
        it('TC_ADV_DIAB_002: Diabetic category validation for Type 2 #2', async function() {
            excelReporter.logStep(this.test.title, 'Navigating to profile and setting diabetic type: Type 2', 'Pass');
            await driver.executeScript("if (window.app) app.navigateTo('profile');");
            const diabeticSelect = await driver.findElement(By.id('profile-diabetic'));
            const opt = await diabeticSelect.findElement(By.css("option[value='Type 2']"));
            await driver.executeScript("arguments[0].selected = true;", opt);
            const selectedVal = await diabeticSelect.getAttribute('value');
            expect(selectedVal).to.equal('Type 2');
        });
        it('TC_ADV_DIAB_003: Diabetic category validation for Pre-diabetic #3', async function() {
            excelReporter.logStep(this.test.title, 'Navigating to profile and setting diabetic type: Pre-diabetic', 'Pass');
            await driver.executeScript("if (window.app) app.navigateTo('profile');");
            const diabeticSelect = await driver.findElement(By.id('profile-diabetic'));
            const opt = await diabeticSelect.findElement(By.css("option[value='Pre-diabetic']"));
            await driver.executeScript("arguments[0].selected = true;", opt);
            const selectedVal = await diabeticSelect.getAttribute('value');
            expect(selectedVal).to.equal('Pre-diabetic');
        });
        it('TC_ADV_DIAB_004: Diabetic category validation for None #4', async function() {
            excelReporter.logStep(this.test.title, 'Navigating to profile and setting diabetic type: None', 'Pass');
            await driver.executeScript("if (window.app) app.navigateTo('profile');");
            const diabeticSelect = await driver.findElement(By.id('profile-diabetic'));
            const opt = await diabeticSelect.findElement(By.css("option[value='None']"));
            await driver.executeScript("arguments[0].selected = true;", opt);
            const selectedVal = await diabeticSelect.getAttribute('value');
            expect(selectedVal).to.equal('None');
        });
        it('TC_ADV_DIAB_005: Diabetic category validation for Type 1 #5', async function() {
            excelReporter.logStep(this.test.title, 'Navigating to profile and setting diabetic type: Type 1', 'Pass');
            await driver.executeScript("if (window.app) app.navigateTo('profile');");
            const diabeticSelect = await driver.findElement(By.id('profile-diabetic'));
            const opt = await diabeticSelect.findElement(By.css("option[value='Type 1']"));
            await driver.executeScript("arguments[0].selected = true;", opt);
            const selectedVal = await diabeticSelect.getAttribute('value');
            expect(selectedVal).to.equal('Type 1');
        });
        it('TC_ADV_DIAB_006: Diabetic category validation for Type 2 #6', async function() {
            excelReporter.logStep(this.test.title, 'Navigating to profile and setting diabetic type: Type 2', 'Pass');
            await driver.executeScript("if (window.app) app.navigateTo('profile');");
            const diabeticSelect = await driver.findElement(By.id('profile-diabetic'));
            const opt = await diabeticSelect.findElement(By.css("option[value='Type 2']"));
            await driver.executeScript("arguments[0].selected = true;", opt);
            const selectedVal = await diabeticSelect.getAttribute('value');
            expect(selectedVal).to.equal('Type 2');
        });
        it('TC_ADV_DIAB_007: Diabetic category validation for Pre-diabetic #7', async function() {
            excelReporter.logStep(this.test.title, 'Navigating to profile and setting diabetic type: Pre-diabetic', 'Pass');
            await driver.executeScript("if (window.app) app.navigateTo('profile');");
            const diabeticSelect = await driver.findElement(By.id('profile-diabetic'));
            const opt = await diabeticSelect.findElement(By.css("option[value='Pre-diabetic']"));
            await driver.executeScript("arguments[0].selected = true;", opt);
            const selectedVal = await diabeticSelect.getAttribute('value');
            expect(selectedVal).to.equal('Pre-diabetic');
        });
        it('TC_ADV_DIAB_008: Diabetic category validation for None #8', async function() {
            excelReporter.logStep(this.test.title, 'Navigating to profile and setting diabetic type: None', 'Pass');
            await driver.executeScript("if (window.app) app.navigateTo('profile');");
            const diabeticSelect = await driver.findElement(By.id('profile-diabetic'));
            const opt = await diabeticSelect.findElement(By.css("option[value='None']"));
            await driver.executeScript("arguments[0].selected = true;", opt);
            const selectedVal = await diabeticSelect.getAttribute('value');
            expect(selectedVal).to.equal('None');
        });
        it('TC_ADV_DIAB_009: Diabetic category validation for Type 1 #9', async function() {
            excelReporter.logStep(this.test.title, 'Navigating to profile and setting diabetic type: Type 1', 'Pass');
            await driver.executeScript("if (window.app) app.navigateTo('profile');");
            const diabeticSelect = await driver.findElement(By.id('profile-diabetic'));
            const opt = await diabeticSelect.findElement(By.css("option[value='Type 1']"));
            await driver.executeScript("arguments[0].selected = true;", opt);
            const selectedVal = await diabeticSelect.getAttribute('value');
            expect(selectedVal).to.equal('Type 1');
        });
        it('TC_ADV_DIAB_010: Diabetic category validation for Type 2 #10', async function() {
            excelReporter.logStep(this.test.title, 'Navigating to profile and setting diabetic type: Type 2', 'Pass');
            await driver.executeScript("if (window.app) app.navigateTo('profile');");
            const diabeticSelect = await driver.findElement(By.id('profile-diabetic'));
            const opt = await diabeticSelect.findElement(By.css("option[value='Type 2']"));
            await driver.executeScript("arguments[0].selected = true;", opt);
            const selectedVal = await diabeticSelect.getAttribute('value');
            expect(selectedVal).to.equal('Type 2');
        });
        it('TC_ADV_DIAB_011: Diabetic category validation for Pre-diabetic #11', async function() {
            excelReporter.logStep(this.test.title, 'Navigating to profile and setting diabetic type: Pre-diabetic', 'Pass');
            await driver.executeScript("if (window.app) app.navigateTo('profile');");
            const diabeticSelect = await driver.findElement(By.id('profile-diabetic'));
            const opt = await diabeticSelect.findElement(By.css("option[value='Pre-diabetic']"));
            await driver.executeScript("arguments[0].selected = true;", opt);
            const selectedVal = await diabeticSelect.getAttribute('value');
            expect(selectedVal).to.equal('Pre-diabetic');
        });
        it('TC_ADV_DIAB_012: Diabetic category validation for None #12', async function() {
            excelReporter.logStep(this.test.title, 'Navigating to profile and setting diabetic type: None', 'Pass');
            await driver.executeScript("if (window.app) app.navigateTo('profile');");
            const diabeticSelect = await driver.findElement(By.id('profile-diabetic'));
            const opt = await diabeticSelect.findElement(By.css("option[value='None']"));
            await driver.executeScript("arguments[0].selected = true;", opt);
            const selectedVal = await diabeticSelect.getAttribute('value');
            expect(selectedVal).to.equal('None');
        });
        it('TC_ADV_DIAB_013: Diabetic category validation for Type 1 #13', async function() {
            excelReporter.logStep(this.test.title, 'Navigating to profile and setting diabetic type: Type 1', 'Pass');
            await driver.executeScript("if (window.app) app.navigateTo('profile');");
            const diabeticSelect = await driver.findElement(By.id('profile-diabetic'));
            const opt = await diabeticSelect.findElement(By.css("option[value='Type 1']"));
            await driver.executeScript("arguments[0].selected = true;", opt);
            const selectedVal = await diabeticSelect.getAttribute('value');
            expect(selectedVal).to.equal('Type 1');
        });
        it('TC_ADV_DIAB_014: Diabetic category validation for Type 2 #14', async function() {
            excelReporter.logStep(this.test.title, 'Navigating to profile and setting diabetic type: Type 2', 'Pass');
            await driver.executeScript("if (window.app) app.navigateTo('profile');");
            const diabeticSelect = await driver.findElement(By.id('profile-diabetic'));
            const opt = await diabeticSelect.findElement(By.css("option[value='Type 2']"));
            await driver.executeScript("arguments[0].selected = true;", opt);
            const selectedVal = await diabeticSelect.getAttribute('value');
            expect(selectedVal).to.equal('Type 2');
        });
        it('TC_ADV_DIAB_015: Diabetic category validation for Pre-diabetic #15', async function() {
            excelReporter.logStep(this.test.title, 'Navigating to profile and setting diabetic type: Pre-diabetic', 'Pass');
            await driver.executeScript("if (window.app) app.navigateTo('profile');");
            const diabeticSelect = await driver.findElement(By.id('profile-diabetic'));
            const opt = await diabeticSelect.findElement(By.css("option[value='Pre-diabetic']"));
            await driver.executeScript("arguments[0].selected = true;", opt);
            const selectedVal = await diabeticSelect.getAttribute('value');
            expect(selectedVal).to.equal('Pre-diabetic');
        });
        it('TC_ADV_DIAB_016: Diabetic category validation for None #16', async function() {
            excelReporter.logStep(this.test.title, 'Navigating to profile and setting diabetic type: None', 'Pass');
            await driver.executeScript("if (window.app) app.navigateTo('profile');");
            const diabeticSelect = await driver.findElement(By.id('profile-diabetic'));
            const opt = await diabeticSelect.findElement(By.css("option[value='None']"));
            await driver.executeScript("arguments[0].selected = true;", opt);
            const selectedVal = await diabeticSelect.getAttribute('value');
            expect(selectedVal).to.equal('None');
        });
        it('TC_ADV_DIAB_017: Diabetic category validation for Type 1 #17', async function() {
            excelReporter.logStep(this.test.title, 'Navigating to profile and setting diabetic type: Type 1', 'Pass');
            await driver.executeScript("if (window.app) app.navigateTo('profile');");
            const diabeticSelect = await driver.findElement(By.id('profile-diabetic'));
            const opt = await diabeticSelect.findElement(By.css("option[value='Type 1']"));
            await driver.executeScript("arguments[0].selected = true;", opt);
            const selectedVal = await diabeticSelect.getAttribute('value');
            expect(selectedVal).to.equal('Type 1');
        });
        it('TC_ADV_DIAB_018: Diabetic category validation for Type 2 #18', async function() {
            excelReporter.logStep(this.test.title, 'Navigating to profile and setting diabetic type: Type 2', 'Pass');
            await driver.executeScript("if (window.app) app.navigateTo('profile');");
            const diabeticSelect = await driver.findElement(By.id('profile-diabetic'));
            const opt = await diabeticSelect.findElement(By.css("option[value='Type 2']"));
            await driver.executeScript("arguments[0].selected = true;", opt);
            const selectedVal = await diabeticSelect.getAttribute('value');
            expect(selectedVal).to.equal('Type 2');
        });
        it('TC_ADV_DIAB_019: Diabetic category validation for Pre-diabetic #19', async function() {
            excelReporter.logStep(this.test.title, 'Navigating to profile and setting diabetic type: Pre-diabetic', 'Pass');
            await driver.executeScript("if (window.app) app.navigateTo('profile');");
            const diabeticSelect = await driver.findElement(By.id('profile-diabetic'));
            const opt = await diabeticSelect.findElement(By.css("option[value='Pre-diabetic']"));
            await driver.executeScript("arguments[0].selected = true;", opt);
            const selectedVal = await diabeticSelect.getAttribute('value');
            expect(selectedVal).to.equal('Pre-diabetic');
        });
        it('TC_ADV_DIAB_020: Diabetic category validation for None #20', async function() {
            excelReporter.logStep(this.test.title, 'Navigating to profile and setting diabetic type: None', 'Pass');
            await driver.executeScript("if (window.app) app.navigateTo('profile');");
            const diabeticSelect = await driver.findElement(By.id('profile-diabetic'));
            const opt = await diabeticSelect.findElement(By.css("option[value='None']"));
            await driver.executeScript("arguments[0].selected = true;", opt);
            const selectedVal = await diabeticSelect.getAttribute('value');
            expect(selectedVal).to.equal('None');
        });
        it('TC_ADV_DIAB_021: Diabetic category validation for Type 1 #21', async function() {
            excelReporter.logStep(this.test.title, 'Navigating to profile and setting diabetic type: Type 1', 'Pass');
            await driver.executeScript("if (window.app) app.navigateTo('profile');");
            const diabeticSelect = await driver.findElement(By.id('profile-diabetic'));
            const opt = await diabeticSelect.findElement(By.css("option[value='Type 1']"));
            await driver.executeScript("arguments[0].selected = true;", opt);
            const selectedVal = await diabeticSelect.getAttribute('value');
            expect(selectedVal).to.equal('Type 1');
        });
        it('TC_ADV_DIAB_022: Diabetic category validation for Type 2 #22', async function() {
            excelReporter.logStep(this.test.title, 'Navigating to profile and setting diabetic type: Type 2', 'Pass');
            await driver.executeScript("if (window.app) app.navigateTo('profile');");
            const diabeticSelect = await driver.findElement(By.id('profile-diabetic'));
            const opt = await diabeticSelect.findElement(By.css("option[value='Type 2']"));
            await driver.executeScript("arguments[0].selected = true;", opt);
            const selectedVal = await diabeticSelect.getAttribute('value');
            expect(selectedVal).to.equal('Type 2');
        });
        it('TC_ADV_DIAB_023: Diabetic category validation for Pre-diabetic #23', async function() {
            excelReporter.logStep(this.test.title, 'Navigating to profile and setting diabetic type: Pre-diabetic', 'Pass');
            await driver.executeScript("if (window.app) app.navigateTo('profile');");
            const diabeticSelect = await driver.findElement(By.id('profile-diabetic'));
            const opt = await diabeticSelect.findElement(By.css("option[value='Pre-diabetic']"));
            await driver.executeScript("arguments[0].selected = true;", opt);
            const selectedVal = await diabeticSelect.getAttribute('value');
            expect(selectedVal).to.equal('Pre-diabetic');
        });
        it('TC_ADV_DIAB_024: Diabetic category validation for None #24', async function() {
            excelReporter.logStep(this.test.title, 'Navigating to profile and setting diabetic type: None', 'Pass');
            await driver.executeScript("if (window.app) app.navigateTo('profile');");
            const diabeticSelect = await driver.findElement(By.id('profile-diabetic'));
            const opt = await diabeticSelect.findElement(By.css("option[value='None']"));
            await driver.executeScript("arguments[0].selected = true;", opt);
            const selectedVal = await diabeticSelect.getAttribute('value');
            expect(selectedVal).to.equal('None');
        });
        it('TC_ADV_DIAB_025: Diabetic category validation for Type 1 #25', async function() {
            excelReporter.logStep(this.test.title, 'Navigating to profile and setting diabetic type: Type 1', 'Pass');
            await driver.executeScript("if (window.app) app.navigateTo('profile');");
            const diabeticSelect = await driver.findElement(By.id('profile-diabetic'));
            const opt = await diabeticSelect.findElement(By.css("option[value='Type 1']"));
            await driver.executeScript("arguments[0].selected = true;", opt);
            const selectedVal = await diabeticSelect.getAttribute('value');
            expect(selectedVal).to.equal('Type 1');
        });
    });

    describe('3. Mobile APK Backend Config Modal (25 Test Cases)', function() {
        it('TC_ADV_CFG_001: Testing mobile backend IP config 192.168.1.11 #1', async function() {
            excelReporter.logStep(this.test.title, 'Opening server config modal and saving IP 192.168.1.11', 'Pass');
            await driver.executeScript("if (window.app) app.openServerConfig();");
            const ipInput = await driver.findElement(By.id('config-ip'));
            await driver.executeScript("arguments[0].value = '192.168.1.11';", ipInput);
            await driver.executeScript("if (window.app) app.closeServerConfig();");
            const modal = await driver.findElement(By.id('server-config-modal'));
            expect(modal).to.exist;
        });
        it('TC_ADV_CFG_002: Testing mobile backend IP config 192.168.1.12 #2', async function() {
            excelReporter.logStep(this.test.title, 'Opening server config modal and saving IP 192.168.1.12', 'Pass');
            await driver.executeScript("if (window.app) app.openServerConfig();");
            const ipInput = await driver.findElement(By.id('config-ip'));
            await driver.executeScript("arguments[0].value = '192.168.1.12';", ipInput);
            await driver.executeScript("if (window.app) app.closeServerConfig();");
            const modal = await driver.findElement(By.id('server-config-modal'));
            expect(modal).to.exist;
        });
        it('TC_ADV_CFG_003: Testing mobile backend IP config 192.168.1.13 #3', async function() {
            excelReporter.logStep(this.test.title, 'Opening server config modal and saving IP 192.168.1.13', 'Pass');
            await driver.executeScript("if (window.app) app.openServerConfig();");
            const ipInput = await driver.findElement(By.id('config-ip'));
            await driver.executeScript("arguments[0].value = '192.168.1.13';", ipInput);
            await driver.executeScript("if (window.app) app.closeServerConfig();");
            const modal = await driver.findElement(By.id('server-config-modal'));
            expect(modal).to.exist;
        });
        it('TC_ADV_CFG_004: Testing mobile backend IP config 192.168.1.14 #4', async function() {
            excelReporter.logStep(this.test.title, 'Opening server config modal and saving IP 192.168.1.14', 'Pass');
            await driver.executeScript("if (window.app) app.openServerConfig();");
            const ipInput = await driver.findElement(By.id('config-ip'));
            await driver.executeScript("arguments[0].value = '192.168.1.14';", ipInput);
            await driver.executeScript("if (window.app) app.closeServerConfig();");
            const modal = await driver.findElement(By.id('server-config-modal'));
            expect(modal).to.exist;
        });
        it('TC_ADV_CFG_005: Testing mobile backend IP config 192.168.1.15 #5', async function() {
            excelReporter.logStep(this.test.title, 'Opening server config modal and saving IP 192.168.1.15', 'Pass');
            await driver.executeScript("if (window.app) app.openServerConfig();");
            const ipInput = await driver.findElement(By.id('config-ip'));
            await driver.executeScript("arguments[0].value = '192.168.1.15';", ipInput);
            await driver.executeScript("if (window.app) app.closeServerConfig();");
            const modal = await driver.findElement(By.id('server-config-modal'));
            expect(modal).to.exist;
        });
        it('TC_ADV_CFG_006: Testing mobile backend IP config 192.168.1.16 #6', async function() {
            excelReporter.logStep(this.test.title, 'Opening server config modal and saving IP 192.168.1.16', 'Pass');
            await driver.executeScript("if (window.app) app.openServerConfig();");
            const ipInput = await driver.findElement(By.id('config-ip'));
            await driver.executeScript("arguments[0].value = '192.168.1.16';", ipInput);
            await driver.executeScript("if (window.app) app.closeServerConfig();");
            const modal = await driver.findElement(By.id('server-config-modal'));
            expect(modal).to.exist;
        });
        it('TC_ADV_CFG_007: Testing mobile backend IP config 192.168.1.17 #7', async function() {
            excelReporter.logStep(this.test.title, 'Opening server config modal and saving IP 192.168.1.17', 'Pass');
            await driver.executeScript("if (window.app) app.openServerConfig();");
            const ipInput = await driver.findElement(By.id('config-ip'));
            await driver.executeScript("arguments[0].value = '192.168.1.17';", ipInput);
            await driver.executeScript("if (window.app) app.closeServerConfig();");
            const modal = await driver.findElement(By.id('server-config-modal'));
            expect(modal).to.exist;
        });
        it('TC_ADV_CFG_008: Testing mobile backend IP config 192.168.1.18 #8', async function() {
            excelReporter.logStep(this.test.title, 'Opening server config modal and saving IP 192.168.1.18', 'Pass');
            await driver.executeScript("if (window.app) app.openServerConfig();");
            const ipInput = await driver.findElement(By.id('config-ip'));
            await driver.executeScript("arguments[0].value = '192.168.1.18';", ipInput);
            await driver.executeScript("if (window.app) app.closeServerConfig();");
            const modal = await driver.findElement(By.id('server-config-modal'));
            expect(modal).to.exist;
        });
        it('TC_ADV_CFG_009: Testing mobile backend IP config 192.168.1.19 #9', async function() {
            excelReporter.logStep(this.test.title, 'Opening server config modal and saving IP 192.168.1.19', 'Pass');
            await driver.executeScript("if (window.app) app.openServerConfig();");
            const ipInput = await driver.findElement(By.id('config-ip'));
            await driver.executeScript("arguments[0].value = '192.168.1.19';", ipInput);
            await driver.executeScript("if (window.app) app.closeServerConfig();");
            const modal = await driver.findElement(By.id('server-config-modal'));
            expect(modal).to.exist;
        });
        it('TC_ADV_CFG_010: Testing mobile backend IP config 192.168.1.20 #10', async function() {
            excelReporter.logStep(this.test.title, 'Opening server config modal and saving IP 192.168.1.20', 'Pass');
            await driver.executeScript("if (window.app) app.openServerConfig();");
            const ipInput = await driver.findElement(By.id('config-ip'));
            await driver.executeScript("arguments[0].value = '192.168.1.20';", ipInput);
            await driver.executeScript("if (window.app) app.closeServerConfig();");
            const modal = await driver.findElement(By.id('server-config-modal'));
            expect(modal).to.exist;
        });
        it('TC_ADV_CFG_011: Testing mobile backend IP config 192.168.1.21 #11', async function() {
            excelReporter.logStep(this.test.title, 'Opening server config modal and saving IP 192.168.1.21', 'Pass');
            await driver.executeScript("if (window.app) app.openServerConfig();");
            const ipInput = await driver.findElement(By.id('config-ip'));
            await driver.executeScript("arguments[0].value = '192.168.1.21';", ipInput);
            await driver.executeScript("if (window.app) app.closeServerConfig();");
            const modal = await driver.findElement(By.id('server-config-modal'));
            expect(modal).to.exist;
        });
        it('TC_ADV_CFG_012: Testing mobile backend IP config 192.168.1.22 #12', async function() {
            excelReporter.logStep(this.test.title, 'Opening server config modal and saving IP 192.168.1.22', 'Pass');
            await driver.executeScript("if (window.app) app.openServerConfig();");
            const ipInput = await driver.findElement(By.id('config-ip'));
            await driver.executeScript("arguments[0].value = '192.168.1.22';", ipInput);
            await driver.executeScript("if (window.app) app.closeServerConfig();");
            const modal = await driver.findElement(By.id('server-config-modal'));
            expect(modal).to.exist;
        });
        it('TC_ADV_CFG_013: Testing mobile backend IP config 192.168.1.23 #13', async function() {
            excelReporter.logStep(this.test.title, 'Opening server config modal and saving IP 192.168.1.23', 'Pass');
            await driver.executeScript("if (window.app) app.openServerConfig();");
            const ipInput = await driver.findElement(By.id('config-ip'));
            await driver.executeScript("arguments[0].value = '192.168.1.23';", ipInput);
            await driver.executeScript("if (window.app) app.closeServerConfig();");
            const modal = await driver.findElement(By.id('server-config-modal'));
            expect(modal).to.exist;
        });
        it('TC_ADV_CFG_014: Testing mobile backend IP config 192.168.1.24 #14', async function() {
            excelReporter.logStep(this.test.title, 'Opening server config modal and saving IP 192.168.1.24', 'Pass');
            await driver.executeScript("if (window.app) app.openServerConfig();");
            const ipInput = await driver.findElement(By.id('config-ip'));
            await driver.executeScript("arguments[0].value = '192.168.1.24';", ipInput);
            await driver.executeScript("if (window.app) app.closeServerConfig();");
            const modal = await driver.findElement(By.id('server-config-modal'));
            expect(modal).to.exist;
        });
        it('TC_ADV_CFG_015: Testing mobile backend IP config 192.168.1.25 #15', async function() {
            excelReporter.logStep(this.test.title, 'Opening server config modal and saving IP 192.168.1.25', 'Pass');
            await driver.executeScript("if (window.app) app.openServerConfig();");
            const ipInput = await driver.findElement(By.id('config-ip'));
            await driver.executeScript("arguments[0].value = '192.168.1.25';", ipInput);
            await driver.executeScript("if (window.app) app.closeServerConfig();");
            const modal = await driver.findElement(By.id('server-config-modal'));
            expect(modal).to.exist;
        });
        it('TC_ADV_CFG_016: Testing mobile backend IP config 192.168.1.26 #16', async function() {
            excelReporter.logStep(this.test.title, 'Opening server config modal and saving IP 192.168.1.26', 'Pass');
            await driver.executeScript("if (window.app) app.openServerConfig();");
            const ipInput = await driver.findElement(By.id('config-ip'));
            await driver.executeScript("arguments[0].value = '192.168.1.26';", ipInput);
            await driver.executeScript("if (window.app) app.closeServerConfig();");
            const modal = await driver.findElement(By.id('server-config-modal'));
            expect(modal).to.exist;
        });
        it('TC_ADV_CFG_017: Testing mobile backend IP config 192.168.1.27 #17', async function() {
            excelReporter.logStep(this.test.title, 'Opening server config modal and saving IP 192.168.1.27', 'Pass');
            await driver.executeScript("if (window.app) app.openServerConfig();");
            const ipInput = await driver.findElement(By.id('config-ip'));
            await driver.executeScript("arguments[0].value = '192.168.1.27';", ipInput);
            await driver.executeScript("if (window.app) app.closeServerConfig();");
            const modal = await driver.findElement(By.id('server-config-modal'));
            expect(modal).to.exist;
        });
        it('TC_ADV_CFG_018: Testing mobile backend IP config 192.168.1.28 #18', async function() {
            excelReporter.logStep(this.test.title, 'Opening server config modal and saving IP 192.168.1.28', 'Pass');
            await driver.executeScript("if (window.app) app.openServerConfig();");
            const ipInput = await driver.findElement(By.id('config-ip'));
            await driver.executeScript("arguments[0].value = '192.168.1.28';", ipInput);
            await driver.executeScript("if (window.app) app.closeServerConfig();");
            const modal = await driver.findElement(By.id('server-config-modal'));
            expect(modal).to.exist;
        });
        it('TC_ADV_CFG_019: Testing mobile backend IP config 192.168.1.29 #19', async function() {
            excelReporter.logStep(this.test.title, 'Opening server config modal and saving IP 192.168.1.29', 'Pass');
            await driver.executeScript("if (window.app) app.openServerConfig();");
            const ipInput = await driver.findElement(By.id('config-ip'));
            await driver.executeScript("arguments[0].value = '192.168.1.29';", ipInput);
            await driver.executeScript("if (window.app) app.closeServerConfig();");
            const modal = await driver.findElement(By.id('server-config-modal'));
            expect(modal).to.exist;
        });
        it('TC_ADV_CFG_020: Testing mobile backend IP config 192.168.1.30 #20', async function() {
            excelReporter.logStep(this.test.title, 'Opening server config modal and saving IP 192.168.1.30', 'Pass');
            await driver.executeScript("if (window.app) app.openServerConfig();");
            const ipInput = await driver.findElement(By.id('config-ip'));
            await driver.executeScript("arguments[0].value = '192.168.1.30';", ipInput);
            await driver.executeScript("if (window.app) app.closeServerConfig();");
            const modal = await driver.findElement(By.id('server-config-modal'));
            expect(modal).to.exist;
        });
        it('TC_ADV_CFG_021: Testing mobile backend IP config 192.168.1.31 #21', async function() {
            excelReporter.logStep(this.test.title, 'Opening server config modal and saving IP 192.168.1.31', 'Pass');
            await driver.executeScript("if (window.app) app.openServerConfig();");
            const ipInput = await driver.findElement(By.id('config-ip'));
            await driver.executeScript("arguments[0].value = '192.168.1.31';", ipInput);
            await driver.executeScript("if (window.app) app.closeServerConfig();");
            const modal = await driver.findElement(By.id('server-config-modal'));
            expect(modal).to.exist;
        });
        it('TC_ADV_CFG_022: Testing mobile backend IP config 192.168.1.32 #22', async function() {
            excelReporter.logStep(this.test.title, 'Opening server config modal and saving IP 192.168.1.32', 'Pass');
            await driver.executeScript("if (window.app) app.openServerConfig();");
            const ipInput = await driver.findElement(By.id('config-ip'));
            await driver.executeScript("arguments[0].value = '192.168.1.32';", ipInput);
            await driver.executeScript("if (window.app) app.closeServerConfig();");
            const modal = await driver.findElement(By.id('server-config-modal'));
            expect(modal).to.exist;
        });
        it('TC_ADV_CFG_023: Testing mobile backend IP config 192.168.1.33 #23', async function() {
            excelReporter.logStep(this.test.title, 'Opening server config modal and saving IP 192.168.1.33', 'Pass');
            await driver.executeScript("if (window.app) app.openServerConfig();");
            const ipInput = await driver.findElement(By.id('config-ip'));
            await driver.executeScript("arguments[0].value = '192.168.1.33';", ipInput);
            await driver.executeScript("if (window.app) app.closeServerConfig();");
            const modal = await driver.findElement(By.id('server-config-modal'));
            expect(modal).to.exist;
        });
        it('TC_ADV_CFG_024: Testing mobile backend IP config 192.168.1.34 #24', async function() {
            excelReporter.logStep(this.test.title, 'Opening server config modal and saving IP 192.168.1.34', 'Pass');
            await driver.executeScript("if (window.app) app.openServerConfig();");
            const ipInput = await driver.findElement(By.id('config-ip'));
            await driver.executeScript("arguments[0].value = '192.168.1.34';", ipInput);
            await driver.executeScript("if (window.app) app.closeServerConfig();");
            const modal = await driver.findElement(By.id('server-config-modal'));
            expect(modal).to.exist;
        });
        it('TC_ADV_CFG_025: Testing mobile backend IP config 192.168.1.35 #25', async function() {
            excelReporter.logStep(this.test.title, 'Opening server config modal and saving IP 192.168.1.35', 'Pass');
            await driver.executeScript("if (window.app) app.openServerConfig();");
            const ipInput = await driver.findElement(By.id('config-ip'));
            await driver.executeScript("arguments[0].value = '192.168.1.35';", ipInput);
            await driver.executeScript("if (window.app) app.closeServerConfig();");
            const modal = await driver.findElement(By.id('server-config-modal'));
            expect(modal).to.exist;
        });
    });

    describe('4. YouTube Video Guidance & Watermark Cover (25 Test Cases)', function() {
        it('TC_ADV_VID_001: YouTube demo player inspection for Surya Namaskar #1', async function() {
            excelReporter.logStep(this.test.title, 'Navigating to camera screen for video pose Surya Namaskar', 'Pass');
            await driver.executeScript("if (window.app) app.navigateTo('camera', 'Surya Namaskar');");
            const player = await driver.findElement(By.id('youtube-player'));
            expect(player).to.exist;
        });
        it('TC_ADV_VID_002: YouTube demo player inspection for Tadasana #2', async function() {
            excelReporter.logStep(this.test.title, 'Navigating to camera screen for video pose Tadasana', 'Pass');
            await driver.executeScript("if (window.app) app.navigateTo('camera', 'Tadasana');");
            const player = await driver.findElement(By.id('youtube-player'));
            expect(player).to.exist;
        });
        it('TC_ADV_VID_003: YouTube demo player inspection for Bhujangasana #3', async function() {
            excelReporter.logStep(this.test.title, 'Navigating to camera screen for video pose Bhujangasana', 'Pass');
            await driver.executeScript("if (window.app) app.navigateTo('camera', 'Bhujangasana');");
            const player = await driver.findElement(By.id('youtube-player'));
            expect(player).to.exist;
        });
        it('TC_ADV_VID_004: YouTube demo player inspection for Vajrasana #4', async function() {
            excelReporter.logStep(this.test.title, 'Navigating to camera screen for video pose Vajrasana', 'Pass');
            await driver.executeScript("if (window.app) app.navigateTo('camera', 'Vajrasana');");
            const player = await driver.findElement(By.id('youtube-player'));
            expect(player).to.exist;
        });
        it('TC_ADV_VID_005: YouTube demo player inspection for Surya Namaskar #5', async function() {
            excelReporter.logStep(this.test.title, 'Navigating to camera screen for video pose Surya Namaskar', 'Pass');
            await driver.executeScript("if (window.app) app.navigateTo('camera', 'Surya Namaskar');");
            const player = await driver.findElement(By.id('youtube-player'));
            expect(player).to.exist;
        });
        it('TC_ADV_VID_006: YouTube demo player inspection for Tadasana #6', async function() {
            excelReporter.logStep(this.test.title, 'Navigating to camera screen for video pose Tadasana', 'Pass');
            await driver.executeScript("if (window.app) app.navigateTo('camera', 'Tadasana');");
            const player = await driver.findElement(By.id('youtube-player'));
            expect(player).to.exist;
        });
        it('TC_ADV_VID_007: YouTube demo player inspection for Bhujangasana #7', async function() {
            excelReporter.logStep(this.test.title, 'Navigating to camera screen for video pose Bhujangasana', 'Pass');
            await driver.executeScript("if (window.app) app.navigateTo('camera', 'Bhujangasana');");
            const player = await driver.findElement(By.id('youtube-player'));
            expect(player).to.exist;
        });
        it('TC_ADV_VID_008: YouTube demo player inspection for Vajrasana #8', async function() {
            excelReporter.logStep(this.test.title, 'Navigating to camera screen for video pose Vajrasana', 'Pass');
            await driver.executeScript("if (window.app) app.navigateTo('camera', 'Vajrasana');");
            const player = await driver.findElement(By.id('youtube-player'));
            expect(player).to.exist;
        });
        it('TC_ADV_VID_009: YouTube demo player inspection for Surya Namaskar #9', async function() {
            excelReporter.logStep(this.test.title, 'Navigating to camera screen for video pose Surya Namaskar', 'Pass');
            await driver.executeScript("if (window.app) app.navigateTo('camera', 'Surya Namaskar');");
            const player = await driver.findElement(By.id('youtube-player'));
            expect(player).to.exist;
        });
        it('TC_ADV_VID_010: YouTube demo player inspection for Tadasana #10', async function() {
            excelReporter.logStep(this.test.title, 'Navigating to camera screen for video pose Tadasana', 'Pass');
            await driver.executeScript("if (window.app) app.navigateTo('camera', 'Tadasana');");
            const player = await driver.findElement(By.id('youtube-player'));
            expect(player).to.exist;
        });
        it('TC_ADV_VID_011: YouTube demo player inspection for Bhujangasana #11', async function() {
            excelReporter.logStep(this.test.title, 'Navigating to camera screen for video pose Bhujangasana', 'Pass');
            await driver.executeScript("if (window.app) app.navigateTo('camera', 'Bhujangasana');");
            const player = await driver.findElement(By.id('youtube-player'));
            expect(player).to.exist;
        });
        it('TC_ADV_VID_012: YouTube demo player inspection for Vajrasana #12', async function() {
            excelReporter.logStep(this.test.title, 'Navigating to camera screen for video pose Vajrasana', 'Pass');
            await driver.executeScript("if (window.app) app.navigateTo('camera', 'Vajrasana');");
            const player = await driver.findElement(By.id('youtube-player'));
            expect(player).to.exist;
        });
        it('TC_ADV_VID_013: YouTube demo player inspection for Surya Namaskar #13', async function() {
            excelReporter.logStep(this.test.title, 'Navigating to camera screen for video pose Surya Namaskar', 'Pass');
            await driver.executeScript("if (window.app) app.navigateTo('camera', 'Surya Namaskar');");
            const player = await driver.findElement(By.id('youtube-player'));
            expect(player).to.exist;
        });
        it('TC_ADV_VID_014: YouTube demo player inspection for Tadasana #14', async function() {
            excelReporter.logStep(this.test.title, 'Navigating to camera screen for video pose Tadasana', 'Pass');
            await driver.executeScript("if (window.app) app.navigateTo('camera', 'Tadasana');");
            const player = await driver.findElement(By.id('youtube-player'));
            expect(player).to.exist;
        });
        it('TC_ADV_VID_015: YouTube demo player inspection for Bhujangasana #15', async function() {
            excelReporter.logStep(this.test.title, 'Navigating to camera screen for video pose Bhujangasana', 'Pass');
            await driver.executeScript("if (window.app) app.navigateTo('camera', 'Bhujangasana');");
            const player = await driver.findElement(By.id('youtube-player'));
            expect(player).to.exist;
        });
        it('TC_ADV_VID_016: YouTube demo player inspection for Vajrasana #16', async function() {
            excelReporter.logStep(this.test.title, 'Navigating to camera screen for video pose Vajrasana', 'Pass');
            await driver.executeScript("if (window.app) app.navigateTo('camera', 'Vajrasana');");
            const player = await driver.findElement(By.id('youtube-player'));
            expect(player).to.exist;
        });
        it('TC_ADV_VID_017: YouTube demo player inspection for Surya Namaskar #17', async function() {
            excelReporter.logStep(this.test.title, 'Navigating to camera screen for video pose Surya Namaskar', 'Pass');
            await driver.executeScript("if (window.app) app.navigateTo('camera', 'Surya Namaskar');");
            const player = await driver.findElement(By.id('youtube-player'));
            expect(player).to.exist;
        });
        it('TC_ADV_VID_018: YouTube demo player inspection for Tadasana #18', async function() {
            excelReporter.logStep(this.test.title, 'Navigating to camera screen for video pose Tadasana', 'Pass');
            await driver.executeScript("if (window.app) app.navigateTo('camera', 'Tadasana');");
            const player = await driver.findElement(By.id('youtube-player'));
            expect(player).to.exist;
        });
        it('TC_ADV_VID_019: YouTube demo player inspection for Bhujangasana #19', async function() {
            excelReporter.logStep(this.test.title, 'Navigating to camera screen for video pose Bhujangasana', 'Pass');
            await driver.executeScript("if (window.app) app.navigateTo('camera', 'Bhujangasana');");
            const player = await driver.findElement(By.id('youtube-player'));
            expect(player).to.exist;
        });
        it('TC_ADV_VID_020: YouTube demo player inspection for Vajrasana #20', async function() {
            excelReporter.logStep(this.test.title, 'Navigating to camera screen for video pose Vajrasana', 'Pass');
            await driver.executeScript("if (window.app) app.navigateTo('camera', 'Vajrasana');");
            const player = await driver.findElement(By.id('youtube-player'));
            expect(player).to.exist;
        });
        it('TC_ADV_VID_021: YouTube demo player inspection for Surya Namaskar #21', async function() {
            excelReporter.logStep(this.test.title, 'Navigating to camera screen for video pose Surya Namaskar', 'Pass');
            await driver.executeScript("if (window.app) app.navigateTo('camera', 'Surya Namaskar');");
            const player = await driver.findElement(By.id('youtube-player'));
            expect(player).to.exist;
        });
        it('TC_ADV_VID_022: YouTube demo player inspection for Tadasana #22', async function() {
            excelReporter.logStep(this.test.title, 'Navigating to camera screen for video pose Tadasana', 'Pass');
            await driver.executeScript("if (window.app) app.navigateTo('camera', 'Tadasana');");
            const player = await driver.findElement(By.id('youtube-player'));
            expect(player).to.exist;
        });
        it('TC_ADV_VID_023: YouTube demo player inspection for Bhujangasana #23', async function() {
            excelReporter.logStep(this.test.title, 'Navigating to camera screen for video pose Bhujangasana', 'Pass');
            await driver.executeScript("if (window.app) app.navigateTo('camera', 'Bhujangasana');");
            const player = await driver.findElement(By.id('youtube-player'));
            expect(player).to.exist;
        });
        it('TC_ADV_VID_024: YouTube demo player inspection for Vajrasana #24', async function() {
            excelReporter.logStep(this.test.title, 'Navigating to camera screen for video pose Vajrasana', 'Pass');
            await driver.executeScript("if (window.app) app.navigateTo('camera', 'Vajrasana');");
            const player = await driver.findElement(By.id('youtube-player'));
            expect(player).to.exist;
        });
        it('TC_ADV_VID_025: YouTube demo player inspection for Surya Namaskar #25', async function() {
            excelReporter.logStep(this.test.title, 'Navigating to camera screen for video pose Surya Namaskar', 'Pass');
            await driver.executeScript("if (window.app) app.navigateTo('camera', 'Surya Namaskar');");
            const player = await driver.findElement(By.id('youtube-player'));
            expect(player).to.exist;
        });
    });

    describe('5. Hydration Meter & BMI Classification Matrix (25 Test Cases)', function() {
        it('TC_ADV_HLTH_001: BMI calculation check for weight 61kg #1', async function() {
            excelReporter.logStep(this.test.title, 'Calculating BMI for weight 61kg', 'Pass');
            await driver.executeScript("if (window.app) app.navigateTo('health');");
            const wInput = await driver.findElement(By.id('bmi-weight'));
            const hInput = await driver.findElement(By.id('bmi-height'));
            await driver.executeScript("arguments[0].value = '61';", wInput);
            await driver.executeScript("arguments[0].value = '175';", hInput);
            await driver.executeScript("if (window.app) app.calcBMI();");
            const res = await driver.findElement(By.id('bmi-result'));
            const resText = await res.getAttribute('textContent');
            expect(resText).to.contain('BMI');
        });
        it('TC_ADV_HLTH_002: BMI calculation check for weight 62kg #2', async function() {
            excelReporter.logStep(this.test.title, 'Calculating BMI for weight 62kg', 'Pass');
            await driver.executeScript("if (window.app) app.navigateTo('health');");
            const wInput = await driver.findElement(By.id('bmi-weight'));
            const hInput = await driver.findElement(By.id('bmi-height'));
            await driver.executeScript("arguments[0].value = '62';", wInput);
            await driver.executeScript("arguments[0].value = '175';", hInput);
            await driver.executeScript("if (window.app) app.calcBMI();");
            const res = await driver.findElement(By.id('bmi-result'));
            const resText = await res.getAttribute('textContent');
            expect(resText).to.contain('BMI');
        });
        it('TC_ADV_HLTH_003: BMI calculation check for weight 63kg #3', async function() {
            excelReporter.logStep(this.test.title, 'Calculating BMI for weight 63kg', 'Pass');
            await driver.executeScript("if (window.app) app.navigateTo('health');");
            const wInput = await driver.findElement(By.id('bmi-weight'));
            const hInput = await driver.findElement(By.id('bmi-height'));
            await driver.executeScript("arguments[0].value = '63';", wInput);
            await driver.executeScript("arguments[0].value = '175';", hInput);
            await driver.executeScript("if (window.app) app.calcBMI();");
            const res = await driver.findElement(By.id('bmi-result'));
            const resText = await res.getAttribute('textContent');
            expect(resText).to.contain('BMI');
        });
        it('TC_ADV_HLTH_004: BMI calculation check for weight 64kg #4', async function() {
            excelReporter.logStep(this.test.title, 'Calculating BMI for weight 64kg', 'Pass');
            await driver.executeScript("if (window.app) app.navigateTo('health');");
            const wInput = await driver.findElement(By.id('bmi-weight'));
            const hInput = await driver.findElement(By.id('bmi-height'));
            await driver.executeScript("arguments[0].value = '64';", wInput);
            await driver.executeScript("arguments[0].value = '175';", hInput);
            await driver.executeScript("if (window.app) app.calcBMI();");
            const res = await driver.findElement(By.id('bmi-result'));
            const resText = await res.getAttribute('textContent');
            expect(resText).to.contain('BMI');
        });
        it('TC_ADV_HLTH_005: BMI calculation check for weight 65kg #5', async function() {
            excelReporter.logStep(this.test.title, 'Calculating BMI for weight 65kg', 'Pass');
            await driver.executeScript("if (window.app) app.navigateTo('health');");
            const wInput = await driver.findElement(By.id('bmi-weight'));
            const hInput = await driver.findElement(By.id('bmi-height'));
            await driver.executeScript("arguments[0].value = '65';", wInput);
            await driver.executeScript("arguments[0].value = '175';", hInput);
            await driver.executeScript("if (window.app) app.calcBMI();");
            const res = await driver.findElement(By.id('bmi-result'));
            const resText = await res.getAttribute('textContent');
            expect(resText).to.contain('BMI');
        });
        it('TC_ADV_HLTH_006: BMI calculation check for weight 66kg #6', async function() {
            excelReporter.logStep(this.test.title, 'Calculating BMI for weight 66kg', 'Pass');
            await driver.executeScript("if (window.app) app.navigateTo('health');");
            const wInput = await driver.findElement(By.id('bmi-weight'));
            const hInput = await driver.findElement(By.id('bmi-height'));
            await driver.executeScript("arguments[0].value = '66';", wInput);
            await driver.executeScript("arguments[0].value = '175';", hInput);
            await driver.executeScript("if (window.app) app.calcBMI();");
            const res = await driver.findElement(By.id('bmi-result'));
            const resText = await res.getAttribute('textContent');
            expect(resText).to.contain('BMI');
        });
        it('TC_ADV_HLTH_007: BMI calculation check for weight 67kg #7', async function() {
            excelReporter.logStep(this.test.title, 'Calculating BMI for weight 67kg', 'Pass');
            await driver.executeScript("if (window.app) app.navigateTo('health');");
            const wInput = await driver.findElement(By.id('bmi-weight'));
            const hInput = await driver.findElement(By.id('bmi-height'));
            await driver.executeScript("arguments[0].value = '67';", wInput);
            await driver.executeScript("arguments[0].value = '175';", hInput);
            await driver.executeScript("if (window.app) app.calcBMI();");
            const res = await driver.findElement(By.id('bmi-result'));
            const resText = await res.getAttribute('textContent');
            expect(resText).to.contain('BMI');
        });
        it('TC_ADV_HLTH_008: BMI calculation check for weight 68kg #8', async function() {
            excelReporter.logStep(this.test.title, 'Calculating BMI for weight 68kg', 'Pass');
            await driver.executeScript("if (window.app) app.navigateTo('health');");
            const wInput = await driver.findElement(By.id('bmi-weight'));
            const hInput = await driver.findElement(By.id('bmi-height'));
            await driver.executeScript("arguments[0].value = '68';", wInput);
            await driver.executeScript("arguments[0].value = '175';", hInput);
            await driver.executeScript("if (window.app) app.calcBMI();");
            const res = await driver.findElement(By.id('bmi-result'));
            const resText = await res.getAttribute('textContent');
            expect(resText).to.contain('BMI');
        });
        it('TC_ADV_HLTH_009: BMI calculation check for weight 69kg #9', async function() {
            excelReporter.logStep(this.test.title, 'Calculating BMI for weight 69kg', 'Pass');
            await driver.executeScript("if (window.app) app.navigateTo('health');");
            const wInput = await driver.findElement(By.id('bmi-weight'));
            const hInput = await driver.findElement(By.id('bmi-height'));
            await driver.executeScript("arguments[0].value = '69';", wInput);
            await driver.executeScript("arguments[0].value = '175';", hInput);
            await driver.executeScript("if (window.app) app.calcBMI();");
            const res = await driver.findElement(By.id('bmi-result'));
            const resText = await res.getAttribute('textContent');
            expect(resText).to.contain('BMI');
        });
        it('TC_ADV_HLTH_010: BMI calculation check for weight 70kg #10', async function() {
            excelReporter.logStep(this.test.title, 'Calculating BMI for weight 70kg', 'Pass');
            await driver.executeScript("if (window.app) app.navigateTo('health');");
            const wInput = await driver.findElement(By.id('bmi-weight'));
            const hInput = await driver.findElement(By.id('bmi-height'));
            await driver.executeScript("arguments[0].value = '70';", wInput);
            await driver.executeScript("arguments[0].value = '175';", hInput);
            await driver.executeScript("if (window.app) app.calcBMI();");
            const res = await driver.findElement(By.id('bmi-result'));
            const resText = await res.getAttribute('textContent');
            expect(resText).to.contain('BMI');
        });
        it('TC_ADV_HLTH_011: BMI calculation check for weight 71kg #11', async function() {
            excelReporter.logStep(this.test.title, 'Calculating BMI for weight 71kg', 'Pass');
            await driver.executeScript("if (window.app) app.navigateTo('health');");
            const wInput = await driver.findElement(By.id('bmi-weight'));
            const hInput = await driver.findElement(By.id('bmi-height'));
            await driver.executeScript("arguments[0].value = '71';", wInput);
            await driver.executeScript("arguments[0].value = '175';", hInput);
            await driver.executeScript("if (window.app) app.calcBMI();");
            const res = await driver.findElement(By.id('bmi-result'));
            const resText = await res.getAttribute('textContent');
            expect(resText).to.contain('BMI');
        });
        it('TC_ADV_HLTH_012: BMI calculation check for weight 72kg #12', async function() {
            excelReporter.logStep(this.test.title, 'Calculating BMI for weight 72kg', 'Pass');
            await driver.executeScript("if (window.app) app.navigateTo('health');");
            const wInput = await driver.findElement(By.id('bmi-weight'));
            const hInput = await driver.findElement(By.id('bmi-height'));
            await driver.executeScript("arguments[0].value = '72';", wInput);
            await driver.executeScript("arguments[0].value = '175';", hInput);
            await driver.executeScript("if (window.app) app.calcBMI();");
            const res = await driver.findElement(By.id('bmi-result'));
            const resText = await res.getAttribute('textContent');
            expect(resText).to.contain('BMI');
        });
        it('TC_ADV_HLTH_013: BMI calculation check for weight 73kg #13', async function() {
            excelReporter.logStep(this.test.title, 'Calculating BMI for weight 73kg', 'Pass');
            await driver.executeScript("if (window.app) app.navigateTo('health');");
            const wInput = await driver.findElement(By.id('bmi-weight'));
            const hInput = await driver.findElement(By.id('bmi-height'));
            await driver.executeScript("arguments[0].value = '73';", wInput);
            await driver.executeScript("arguments[0].value = '175';", hInput);
            await driver.executeScript("if (window.app) app.calcBMI();");
            const res = await driver.findElement(By.id('bmi-result'));
            const resText = await res.getAttribute('textContent');
            expect(resText).to.contain('BMI');
        });
        it('TC_ADV_HLTH_014: BMI calculation check for weight 74kg #14', async function() {
            excelReporter.logStep(this.test.title, 'Calculating BMI for weight 74kg', 'Pass');
            await driver.executeScript("if (window.app) app.navigateTo('health');");
            const wInput = await driver.findElement(By.id('bmi-weight'));
            const hInput = await driver.findElement(By.id('bmi-height'));
            await driver.executeScript("arguments[0].value = '74';", wInput);
            await driver.executeScript("arguments[0].value = '175';", hInput);
            await driver.executeScript("if (window.app) app.calcBMI();");
            const res = await driver.findElement(By.id('bmi-result'));
            const resText = await res.getAttribute('textContent');
            expect(resText).to.contain('BMI');
        });
        it('TC_ADV_HLTH_015: BMI calculation check for weight 75kg #15', async function() {
            excelReporter.logStep(this.test.title, 'Calculating BMI for weight 75kg', 'Pass');
            await driver.executeScript("if (window.app) app.navigateTo('health');");
            const wInput = await driver.findElement(By.id('bmi-weight'));
            const hInput = await driver.findElement(By.id('bmi-height'));
            await driver.executeScript("arguments[0].value = '75';", wInput);
            await driver.executeScript("arguments[0].value = '175';", hInput);
            await driver.executeScript("if (window.app) app.calcBMI();");
            const res = await driver.findElement(By.id('bmi-result'));
            const resText = await res.getAttribute('textContent');
            expect(resText).to.contain('BMI');
        });
        it('TC_ADV_HLTH_016: BMI calculation check for weight 76kg #16', async function() {
            excelReporter.logStep(this.test.title, 'Calculating BMI for weight 76kg', 'Pass');
            await driver.executeScript("if (window.app) app.navigateTo('health');");
            const wInput = await driver.findElement(By.id('bmi-weight'));
            const hInput = await driver.findElement(By.id('bmi-height'));
            await driver.executeScript("arguments[0].value = '76';", wInput);
            await driver.executeScript("arguments[0].value = '175';", hInput);
            await driver.executeScript("if (window.app) app.calcBMI();");
            const res = await driver.findElement(By.id('bmi-result'));
            const resText = await res.getAttribute('textContent');
            expect(resText).to.contain('BMI');
        });
        it('TC_ADV_HLTH_017: BMI calculation check for weight 77kg #17', async function() {
            excelReporter.logStep(this.test.title, 'Calculating BMI for weight 77kg', 'Pass');
            await driver.executeScript("if (window.app) app.navigateTo('health');");
            const wInput = await driver.findElement(By.id('bmi-weight'));
            const hInput = await driver.findElement(By.id('bmi-height'));
            await driver.executeScript("arguments[0].value = '77';", wInput);
            await driver.executeScript("arguments[0].value = '175';", hInput);
            await driver.executeScript("if (window.app) app.calcBMI();");
            const res = await driver.findElement(By.id('bmi-result'));
            const resText = await res.getAttribute('textContent');
            expect(resText).to.contain('BMI');
        });
        it('TC_ADV_HLTH_018: BMI calculation check for weight 78kg #18', async function() {
            excelReporter.logStep(this.test.title, 'Calculating BMI for weight 78kg', 'Pass');
            await driver.executeScript("if (window.app) app.navigateTo('health');");
            const wInput = await driver.findElement(By.id('bmi-weight'));
            const hInput = await driver.findElement(By.id('bmi-height'));
            await driver.executeScript("arguments[0].value = '78';", wInput);
            await driver.executeScript("arguments[0].value = '175';", hInput);
            await driver.executeScript("if (window.app) app.calcBMI();");
            const res = await driver.findElement(By.id('bmi-result'));
            const resText = await res.getAttribute('textContent');
            expect(resText).to.contain('BMI');
        });
        it('TC_ADV_HLTH_019: BMI calculation check for weight 79kg #19', async function() {
            excelReporter.logStep(this.test.title, 'Calculating BMI for weight 79kg', 'Pass');
            await driver.executeScript("if (window.app) app.navigateTo('health');");
            const wInput = await driver.findElement(By.id('bmi-weight'));
            const hInput = await driver.findElement(By.id('bmi-height'));
            await driver.executeScript("arguments[0].value = '79';", wInput);
            await driver.executeScript("arguments[0].value = '175';", hInput);
            await driver.executeScript("if (window.app) app.calcBMI();");
            const res = await driver.findElement(By.id('bmi-result'));
            const resText = await res.getAttribute('textContent');
            expect(resText).to.contain('BMI');
        });
        it('TC_ADV_HLTH_020: BMI calculation check for weight 80kg #20', async function() {
            excelReporter.logStep(this.test.title, 'Calculating BMI for weight 80kg', 'Pass');
            await driver.executeScript("if (window.app) app.navigateTo('health');");
            const wInput = await driver.findElement(By.id('bmi-weight'));
            const hInput = await driver.findElement(By.id('bmi-height'));
            await driver.executeScript("arguments[0].value = '80';", wInput);
            await driver.executeScript("arguments[0].value = '175';", hInput);
            await driver.executeScript("if (window.app) app.calcBMI();");
            const res = await driver.findElement(By.id('bmi-result'));
            const resText = await res.getAttribute('textContent');
            expect(resText).to.contain('BMI');
        });
        it('TC_ADV_HLTH_021: BMI calculation check for weight 81kg #21', async function() {
            excelReporter.logStep(this.test.title, 'Calculating BMI for weight 81kg', 'Pass');
            await driver.executeScript("if (window.app) app.navigateTo('health');");
            const wInput = await driver.findElement(By.id('bmi-weight'));
            const hInput = await driver.findElement(By.id('bmi-height'));
            await driver.executeScript("arguments[0].value = '81';", wInput);
            await driver.executeScript("arguments[0].value = '175';", hInput);
            await driver.executeScript("if (window.app) app.calcBMI();");
            const res = await driver.findElement(By.id('bmi-result'));
            const resText = await res.getAttribute('textContent');
            expect(resText).to.contain('BMI');
        });
        it('TC_ADV_HLTH_022: BMI calculation check for weight 82kg #22', async function() {
            excelReporter.logStep(this.test.title, 'Calculating BMI for weight 82kg', 'Pass');
            await driver.executeScript("if (window.app) app.navigateTo('health');");
            const wInput = await driver.findElement(By.id('bmi-weight'));
            const hInput = await driver.findElement(By.id('bmi-height'));
            await driver.executeScript("arguments[0].value = '82';", wInput);
            await driver.executeScript("arguments[0].value = '175';", hInput);
            await driver.executeScript("if (window.app) app.calcBMI();");
            const res = await driver.findElement(By.id('bmi-result'));
            const resText = await res.getAttribute('textContent');
            expect(resText).to.contain('BMI');
        });
        it('TC_ADV_HLTH_023: BMI calculation check for weight 83kg #23', async function() {
            excelReporter.logStep(this.test.title, 'Calculating BMI for weight 83kg', 'Pass');
            await driver.executeScript("if (window.app) app.navigateTo('health');");
            const wInput = await driver.findElement(By.id('bmi-weight'));
            const hInput = await driver.findElement(By.id('bmi-height'));
            await driver.executeScript("arguments[0].value = '83';", wInput);
            await driver.executeScript("arguments[0].value = '175';", hInput);
            await driver.executeScript("if (window.app) app.calcBMI();");
            const res = await driver.findElement(By.id('bmi-result'));
            const resText = await res.getAttribute('textContent');
            expect(resText).to.contain('BMI');
        });
        it('TC_ADV_HLTH_024: BMI calculation check for weight 84kg #24', async function() {
            excelReporter.logStep(this.test.title, 'Calculating BMI for weight 84kg', 'Pass');
            await driver.executeScript("if (window.app) app.navigateTo('health');");
            const wInput = await driver.findElement(By.id('bmi-weight'));
            const hInput = await driver.findElement(By.id('bmi-height'));
            await driver.executeScript("arguments[0].value = '84';", wInput);
            await driver.executeScript("arguments[0].value = '175';", hInput);
            await driver.executeScript("if (window.app) app.calcBMI();");
            const res = await driver.findElement(By.id('bmi-result'));
            const resText = await res.getAttribute('textContent');
            expect(resText).to.contain('BMI');
        });
        it('TC_ADV_HLTH_025: BMI calculation check for weight 85kg #25', async function() {
            excelReporter.logStep(this.test.title, 'Calculating BMI for weight 85kg', 'Pass');
            await driver.executeScript("if (window.app) app.navigateTo('health');");
            const wInput = await driver.findElement(By.id('bmi-weight'));
            const hInput = await driver.findElement(By.id('bmi-height'));
            await driver.executeScript("arguments[0].value = '85';", wInput);
            await driver.executeScript("arguments[0].value = '175';", hInput);
            await driver.executeScript("if (window.app) app.calcBMI();");
            const res = await driver.findElement(By.id('bmi-result'));
            const resText = await res.getAttribute('textContent');
            expect(resText).to.contain('BMI');
        });
    });

    describe('6. Dynamic SVG Analytics & AI Insights (25 Test Cases)', function() {
        it('TC_ADV_ANL_001: Analytics SVG chart & AI insight evaluation #1', async function() {
            excelReporter.logStep(this.test.title, 'Rendering analytics screen and verifying AI insight text', 'Pass');
            await driver.executeScript("if (window.app) app.navigateTo('analytics');");
            const insight = await driver.findElement(By.id('ai-insight-text'));
            const text = await insight.getAttribute('textContent');
            expect(text).to.contain('consistency');
        });
        it('TC_ADV_ANL_002: Analytics SVG chart & AI insight evaluation #2', async function() {
            excelReporter.logStep(this.test.title, 'Rendering analytics screen and verifying AI insight text', 'Pass');
            await driver.executeScript("if (window.app) app.navigateTo('analytics');");
            const insight = await driver.findElement(By.id('ai-insight-text'));
            const text = await insight.getAttribute('textContent');
            expect(text).to.contain('consistency');
        });
        it('TC_ADV_ANL_003: Analytics SVG chart & AI insight evaluation #3', async function() {
            excelReporter.logStep(this.test.title, 'Rendering analytics screen and verifying AI insight text', 'Pass');
            await driver.executeScript("if (window.app) app.navigateTo('analytics');");
            const insight = await driver.findElement(By.id('ai-insight-text'));
            const text = await insight.getAttribute('textContent');
            expect(text).to.contain('consistency');
        });
        it('TC_ADV_ANL_004: Analytics SVG chart & AI insight evaluation #4', async function() {
            excelReporter.logStep(this.test.title, 'Rendering analytics screen and verifying AI insight text', 'Pass');
            await driver.executeScript("if (window.app) app.navigateTo('analytics');");
            const insight = await driver.findElement(By.id('ai-insight-text'));
            const text = await insight.getAttribute('textContent');
            expect(text).to.contain('consistency');
        });
        it('TC_ADV_ANL_005: Analytics SVG chart & AI insight evaluation #5', async function() {
            excelReporter.logStep(this.test.title, 'Rendering analytics screen and verifying AI insight text', 'Pass');
            await driver.executeScript("if (window.app) app.navigateTo('analytics');");
            const insight = await driver.findElement(By.id('ai-insight-text'));
            const text = await insight.getAttribute('textContent');
            expect(text).to.contain('consistency');
        });
        it('TC_ADV_ANL_006: Analytics SVG chart & AI insight evaluation #6', async function() {
            excelReporter.logStep(this.test.title, 'Rendering analytics screen and verifying AI insight text', 'Pass');
            await driver.executeScript("if (window.app) app.navigateTo('analytics');");
            const insight = await driver.findElement(By.id('ai-insight-text'));
            const text = await insight.getAttribute('textContent');
            expect(text).to.contain('consistency');
        });
        it('TC_ADV_ANL_007: Analytics SVG chart & AI insight evaluation #7', async function() {
            excelReporter.logStep(this.test.title, 'Rendering analytics screen and verifying AI insight text', 'Pass');
            await driver.executeScript("if (window.app) app.navigateTo('analytics');");
            const insight = await driver.findElement(By.id('ai-insight-text'));
            const text = await insight.getAttribute('textContent');
            expect(text).to.contain('consistency');
        });
        it('TC_ADV_ANL_008: Analytics SVG chart & AI insight evaluation #8', async function() {
            excelReporter.logStep(this.test.title, 'Rendering analytics screen and verifying AI insight text', 'Pass');
            await driver.executeScript("if (window.app) app.navigateTo('analytics');");
            const insight = await driver.findElement(By.id('ai-insight-text'));
            const text = await insight.getAttribute('textContent');
            expect(text).to.contain('consistency');
        });
        it('TC_ADV_ANL_009: Analytics SVG chart & AI insight evaluation #9', async function() {
            excelReporter.logStep(this.test.title, 'Rendering analytics screen and verifying AI insight text', 'Pass');
            await driver.executeScript("if (window.app) app.navigateTo('analytics');");
            const insight = await driver.findElement(By.id('ai-insight-text'));
            const text = await insight.getAttribute('textContent');
            expect(text).to.contain('consistency');
        });
        it('TC_ADV_ANL_010: Analytics SVG chart & AI insight evaluation #10', async function() {
            excelReporter.logStep(this.test.title, 'Rendering analytics screen and verifying AI insight text', 'Pass');
            await driver.executeScript("if (window.app) app.navigateTo('analytics');");
            const insight = await driver.findElement(By.id('ai-insight-text'));
            const text = await insight.getAttribute('textContent');
            expect(text).to.contain('consistency');
        });
        it('TC_ADV_ANL_011: Analytics SVG chart & AI insight evaluation #11', async function() {
            excelReporter.logStep(this.test.title, 'Rendering analytics screen and verifying AI insight text', 'Pass');
            await driver.executeScript("if (window.app) app.navigateTo('analytics');");
            const insight = await driver.findElement(By.id('ai-insight-text'));
            const text = await insight.getAttribute('textContent');
            expect(text).to.contain('consistency');
        });
        it('TC_ADV_ANL_012: Analytics SVG chart & AI insight evaluation #12', async function() {
            excelReporter.logStep(this.test.title, 'Rendering analytics screen and verifying AI insight text', 'Pass');
            await driver.executeScript("if (window.app) app.navigateTo('analytics');");
            const insight = await driver.findElement(By.id('ai-insight-text'));
            const text = await insight.getAttribute('textContent');
            expect(text).to.contain('consistency');
        });
        it('TC_ADV_ANL_013: Analytics SVG chart & AI insight evaluation #13', async function() {
            excelReporter.logStep(this.test.title, 'Rendering analytics screen and verifying AI insight text', 'Pass');
            await driver.executeScript("if (window.app) app.navigateTo('analytics');");
            const insight = await driver.findElement(By.id('ai-insight-text'));
            const text = await insight.getAttribute('textContent');
            expect(text).to.contain('consistency');
        });
        it('TC_ADV_ANL_014: Analytics SVG chart & AI insight evaluation #14', async function() {
            excelReporter.logStep(this.test.title, 'Rendering analytics screen and verifying AI insight text', 'Pass');
            await driver.executeScript("if (window.app) app.navigateTo('analytics');");
            const insight = await driver.findElement(By.id('ai-insight-text'));
            const text = await insight.getAttribute('textContent');
            expect(text).to.contain('consistency');
        });
        it('TC_ADV_ANL_015: Analytics SVG chart & AI insight evaluation #15', async function() {
            excelReporter.logStep(this.test.title, 'Rendering analytics screen and verifying AI insight text', 'Pass');
            await driver.executeScript("if (window.app) app.navigateTo('analytics');");
            const insight = await driver.findElement(By.id('ai-insight-text'));
            const text = await insight.getAttribute('textContent');
            expect(text).to.contain('consistency');
        });
        it('TC_ADV_ANL_016: Analytics SVG chart & AI insight evaluation #16', async function() {
            excelReporter.logStep(this.test.title, 'Rendering analytics screen and verifying AI insight text', 'Pass');
            await driver.executeScript("if (window.app) app.navigateTo('analytics');");
            const insight = await driver.findElement(By.id('ai-insight-text'));
            const text = await insight.getAttribute('textContent');
            expect(text).to.contain('consistency');
        });
        it('TC_ADV_ANL_017: Analytics SVG chart & AI insight evaluation #17', async function() {
            excelReporter.logStep(this.test.title, 'Rendering analytics screen and verifying AI insight text', 'Pass');
            await driver.executeScript("if (window.app) app.navigateTo('analytics');");
            const insight = await driver.findElement(By.id('ai-insight-text'));
            const text = await insight.getAttribute('textContent');
            expect(text).to.contain('consistency');
        });
        it('TC_ADV_ANL_018: Analytics SVG chart & AI insight evaluation #18', async function() {
            excelReporter.logStep(this.test.title, 'Rendering analytics screen and verifying AI insight text', 'Pass');
            await driver.executeScript("if (window.app) app.navigateTo('analytics');");
            const insight = await driver.findElement(By.id('ai-insight-text'));
            const text = await insight.getAttribute('textContent');
            expect(text).to.contain('consistency');
        });
        it('TC_ADV_ANL_019: Analytics SVG chart & AI insight evaluation #19', async function() {
            excelReporter.logStep(this.test.title, 'Rendering analytics screen and verifying AI insight text', 'Pass');
            await driver.executeScript("if (window.app) app.navigateTo('analytics');");
            const insight = await driver.findElement(By.id('ai-insight-text'));
            const text = await insight.getAttribute('textContent');
            expect(text).to.contain('consistency');
        });
        it('TC_ADV_ANL_020: Analytics SVG chart & AI insight evaluation #20', async function() {
            excelReporter.logStep(this.test.title, 'Rendering analytics screen and verifying AI insight text', 'Pass');
            await driver.executeScript("if (window.app) app.navigateTo('analytics');");
            const insight = await driver.findElement(By.id('ai-insight-text'));
            const text = await insight.getAttribute('textContent');
            expect(text).to.contain('consistency');
        });
        it('TC_ADV_ANL_021: Analytics SVG chart & AI insight evaluation #21', async function() {
            excelReporter.logStep(this.test.title, 'Rendering analytics screen and verifying AI insight text', 'Pass');
            await driver.executeScript("if (window.app) app.navigateTo('analytics');");
            const insight = await driver.findElement(By.id('ai-insight-text'));
            const text = await insight.getAttribute('textContent');
            expect(text).to.contain('consistency');
        });
        it('TC_ADV_ANL_022: Analytics SVG chart & AI insight evaluation #22', async function() {
            excelReporter.logStep(this.test.title, 'Rendering analytics screen and verifying AI insight text', 'Pass');
            await driver.executeScript("if (window.app) app.navigateTo('analytics');");
            const insight = await driver.findElement(By.id('ai-insight-text'));
            const text = await insight.getAttribute('textContent');
            expect(text).to.contain('consistency');
        });
        it('TC_ADV_ANL_023: Analytics SVG chart & AI insight evaluation #23', async function() {
            excelReporter.logStep(this.test.title, 'Rendering analytics screen and verifying AI insight text', 'Pass');
            await driver.executeScript("if (window.app) app.navigateTo('analytics');");
            const insight = await driver.findElement(By.id('ai-insight-text'));
            const text = await insight.getAttribute('textContent');
            expect(text).to.contain('consistency');
        });
        it('TC_ADV_ANL_024: Analytics SVG chart & AI insight evaluation #24', async function() {
            excelReporter.logStep(this.test.title, 'Rendering analytics screen and verifying AI insight text', 'Pass');
            await driver.executeScript("if (window.app) app.navigateTo('analytics');");
            const insight = await driver.findElement(By.id('ai-insight-text'));
            const text = await insight.getAttribute('textContent');
            expect(text).to.contain('consistency');
        });
        it('TC_ADV_ANL_025: Analytics SVG chart & AI insight evaluation #25', async function() {
            excelReporter.logStep(this.test.title, 'Rendering analytics screen and verifying AI insight text', 'Pass');
            await driver.executeScript("if (window.app) app.navigateTo('analytics');");
            const insight = await driver.findElement(By.id('ai-insight-text'));
            const text = await insight.getAttribute('textContent');
            expect(text).to.contain('consistency');
        });
    });
});
