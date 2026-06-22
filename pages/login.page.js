import { By } from 'selenium-webdriver';
import { BasePage } from './base.page.js';

export class LoginPage extends BasePage {
    constructor(driver) {
        super(driver);
        this.emailInput = By.id('auth-email');
        this.passwordInput = By.id('auth-password');
        this.fullNameInput = By.id('reg-name');
        this.confirmPasswordInput = By.id('reg-confirm-password');
        this.submitButton = By.id('submit-btn');
        this.switchModeLink = By.id('switch-mode-link');
        
        // Server configuration
        this.serverConfigLink = By.css('.server-config-link a');
        this.configIpInput = By.id('config-ip');
        this.configPortInput = By.id('config-port');
        this.configSaveButton = By.css('#server-config-modal button.btn:not(.btn-cancel)');
        this.configCancelButton = By.css('#server-config-modal button.btn-cancel');

        // Alert elements
        this.errorAlert = By.id('alert-error');
        this.successAlert = By.id('alert-success');
        this.errorMessage = By.id('error-message');
        this.successMessage = By.id('success-message');
    }

    /**
     * Performs standard login
     */
    async login(email, password) {
        await this.type(this.emailInput, email);
        await this.type(this.passwordInput, password);
        await this.click(this.submitButton);
    }

    /**
     * Performs registration
     */
    async register(name, email, password, confirmPassword) {
        await this.type(this.fullNameInput, name);
        await this.type(this.emailInput, email);
        await this.type(this.passwordInput, password);
        await this.type(this.confirmPasswordInput, confirmPassword);
        await this.click(this.submitButton);
    }

    /**
     * Toggles between Login and Register mode
     */
    async toggleAuthMode() {
        await this.click(this.switchModeLink);
    }

    /**
     * Opens the backend server configuration modal
     */
    async openServerConfig() {
        await this.click(this.serverConfigLink);
    }

    /**
     * Sets backend configuration values in modal
     */
    async saveServerConfig(ip, port) {
        await this.openServerConfig();
        await this.type(this.configIpInput, ip);
        await this.type(this.configPortInput, port);
        await this.click(this.configSaveButton);
    }

    /**
     * Closes the config modal via Cancel button
     */
    async cancelServerConfig() {
        await this.click(this.configCancelButton);
    }

    /**
     * Reads the current error alert message
     */
    async getErrorMessage() {
        return await this.getText(this.errorMessage);
    }

    /**
     * Reads the current success alert message
     */
    async getSuccessMessage() {
        return await this.getText(this.successMessage);
    }

    /**
     * Checks if the error message alert box is displayed
     */
    async isErrorAlertDisplayed() {
        return await this.isElementDisplayed(this.errorAlert);
    }

    /**
     * Checks if the success message alert box is displayed
     */
    async isSuccessAlertDisplayed() {
        return await this.isElementDisplayed(this.successAlert);
    }
}
