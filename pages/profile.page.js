import { By } from 'selenium-webdriver';
import { BasePage } from './base.page.js';

export class ProfilePage extends BasePage {
    constructor(driver) {
        super(driver);
        this.profileEmail = By.id('profile-email');
        this.profileName = By.id('profile-name');
        this.profileMobile = By.id('profile-mobile');
        this.profileAge = By.id('profile-age');
        this.profileGender = By.id('profile-gender');
        this.profileDiabetic = By.id('profile-diabetic');
        this.avatarWrapper = By.css('.avatar-wrapper');
        this.profilePicInput = By.id('profile-pic-input');
        this.avatarPreview = By.id('profile-avatar-preview');
        this.saveChangesBtn = By.css('#profile-form button[type="submit"]');
        this.profileTitle = By.css('#screen-profile h2');
    }

    async getProfileTitle() {
        return await this.getText(this.profileTitle);
    }

    /**
     * Fills the profile editing fields.
     */
    async fillProfile(name, mobile, age, gender, diabeticType) {
        if (name !== undefined) await this.type(this.profileName, name);
        if (mobile !== undefined) await this.type(this.profileMobile, mobile);
        if (age !== undefined) await this.type(this.profileAge, age);
        
        // Select Gender dropdown
        if (gender) {
            const genderSelect = await this.findElement(this.profileGender);
            await genderSelect.click();
            const option = await genderSelect.findElement(By.css(`option[value="${gender}"]`));
            await option.click();
        }

        // Select Diabetic Type dropdown
        if (diabeticType) {
            const diabeticSelect = await this.findElement(this.profileDiabetic);
            await diabeticSelect.click();
            const option = await diabeticSelect.findElement(By.css(`option[value="${diabeticType}"]`));
            await option.click();
        }
    }

    /**
     * Uploads an avatar image by passing its local file path to the hidden file input element.
     */
    async uploadAvatar(absoluteFilePath) {
        const fileInput = await this.driver.findElement(this.profilePicInput);
        await fileInput.sendKeys(absoluteFilePath);
    }

    /**
     * Gets the base64 or URL src of the current avatar preview image.
     */
    async getAvatarSrc() {
        return await this.getAttribute(this.avatarPreview, 'src');
    }

    /**
     * Clicks the save profile changes button.
     */
    async saveProfile() {
        await this.click(this.saveChangesBtn);
    }
}
