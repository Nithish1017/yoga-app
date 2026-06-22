import { By } from 'selenium-webdriver';
import { BasePage } from './base.page.js';

export class CameraPage extends BasePage {
    constructor(driver) {
        super(driver);
        this.cameraScreen = By.id('screen-camera');
        this.sessionBtn = By.id('session-btn');
        this.aiInstruction = By.id('ai-instruction');
        this.accuracyFill = By.id('accuracy-fill');
        this.exitBtn = By.css('.session-controls button:first-child');
    }

    async getInstructionText() {
        return await this.getText(this.aiInstruction);
    }

    async getSessionBtnText() {
        return await this.getText(this.sessionBtn);
    }

    async clickSessionBtn() {
        await this.click(this.sessionBtn);
    }

    async exitSession() {
        await this.click(this.exitBtn);
    }
}
