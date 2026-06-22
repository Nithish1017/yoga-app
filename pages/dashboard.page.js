import { By } from 'selenium-webdriver';
import { BasePage } from './base.page.js';

export class DashboardPage extends BasePage {
    constructor(driver) {
        super(driver);
        // Header Nav Links
        this.navDashboard = By.xpath("//header//a[contains(text(), 'Dashboard')]");
        this.navLibrary = By.xpath("//header//a[contains(text(), 'Library')]");
        this.navHealth = By.xpath("//header//a[contains(text(), 'Health')]");
        this.navAnalytics = By.xpath("//header//a[contains(text(), 'Analytics')]");
        this.navProfileBtn = By.id('profile-btn');
        this.navLogoutBtn = By.id('logout-btn');
        this.navThemeToggle = By.id('theme-toggle');

        // Dashboard statistics
        this.dashHeader = By.css('.dash-header h1');
        this.startSessionBtn = By.css('.dash-header button');
        this.streakVal = By.id('dash-streak');
        this.hydrationVal = By.id('dash-hydration');
        this.stepsVal = By.id('dash-steps');
        this.recommendedPoseStartBtn = By.css('.pose-rec button');
        this.healthTipText = By.id('health-tip');
    }

    async getDashboardTitle() {
        return await this.getText(this.dashHeader);
    }

    async startGeneralSession() {
        await this.click(this.startSessionBtn);
    }

    async startRecommendedPose() {
        await this.click(this.recommendedPoseStartBtn);
    }

    async getStreak() {
        return await this.getText(this.streakVal);
    }

    async getHydration() {
        return await this.getText(this.hydrationVal);
    }

    async getSteps() {
        return await this.getText(this.stepsVal);
    }

    async getHealthTip() {
        return await this.getText(this.healthTipText);
    }

    // Navigation wrappers
    async navigateToDashboard() {
        await this.click(this.navDashboard);
    }

    async navigateToLibrary() {
        await this.click(this.navLibrary);
    }

    async navigateToHealth() {
        await this.click(this.navHealth);
    }

    async navigateToAnalytics() {
        await this.click(this.navAnalytics);
    }

    async navigateToProfile() {
        await this.click(this.navProfileBtn);
    }

    async toggleTheme() {
        await this.click(this.navThemeToggle);
    }

    async logout() {
        await this.click(this.navLogoutBtn);
    }
}
