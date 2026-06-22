import { By } from 'selenium-webdriver';
import { BasePage } from './base.page.js';

export class HealthPage extends BasePage {
    constructor(driver) {
        super(driver);
        this.waterText = By.id('water-text');
        this.addWaterBtn = By.xpath("//button[contains(text(), '+ Add 250ml')]");
        this.bmiWeightInput = By.id('bmi-weight');
        this.bmiHeightInput = By.id('bmi-height');
        this.bmiCalcBtn = By.xpath("//button[contains(text(), 'Calculate')]");
        this.bmiResult = By.id('bmi-result');
        this.historyRows = By.css('#history-table tbody tr');
    }

    async getWaterText() {
        return await this.getText(this.waterText);
    }

    async addWater() {
        await this.click(this.addWaterBtn);
    }

    async calculateBMI(weight, height) {
        await this.type(this.bmiWeightInput, weight.toString());
        await this.type(this.bmiHeightInput, height.toString());
        await this.click(this.bmiCalcBtn);
    }

    async getBmiResult() {
        return await this.getText(this.bmiResult);
    }

    /**
     * Gets the count of rows currently in the history log table.
     */
    async getHistoryRecordsCount() {
        const rows = await this.findElements(this.historyRows);
        return rows.length;
    }

    /**
     * Returns the cells text values of the first record in the history table.
     */
    async getFirstHistoryRecord() {
        const rows = await this.findElements(this.historyRows);
        if (rows.length === 0) {
            return null;
        }
        const cells = await rows[0].findElements(By.tagName('td'));
        if (cells.length < 4) {
            return null;
        }
        return {
            date: await cells[0].getText(),
            pose: await cells[1].getText(),
            duration: await cells[2].getText(),
            accuracy: await cells[3].getText()
        };
    }
}
