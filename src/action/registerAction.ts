import {Page, expect} from '@playwright/test';
import {registerPage} from '../page/registerPage';
import testdata  from "../testdata/register.json"

type RegisterDetails = {
    FirstName : string,
    LastName : string,
    EMail : string,
    TelePhone : string,
    ConfirmPassword : string,
    Password : string
}

export class registerAction{
    private readonly registerPages: registerPage;

    constructor(page: Page){
        this.registerPages = new registerPage(page);
    }

    async registerUser(testdata: RegisterDetails)
    {
        await this.registerPages.myAccountDropdown.click()
        await this.registerPages.registerDropDown.click();
        

        // Validate the register page is visible
        await expect(this.registerPages.registerLogo).toBeVisible();

        // fill the register form
        await this.registerPages.firstName.fill(testdata.FirstName);
        await this.registerPages.lastName.fill(testdata.LastName);
        await this.registerPages.email.fill(testdata.EMail);
        await this.registerPages.telePhone.fill(testdata.TelePhone);
        await this.registerPages.password.fill(testdata.Password);
        await this.registerPages.confirmPassword.fill(testdata.ConfirmPassword);

        //click the check box
        await this.registerPages.checkBox.check();

        // click the continue button
        await this.registerPages.continueRegisterButton.click();
        
        // validate the register success message
        await expect(this.registerPages.registerSuccessMessage).toBeVisible();

        // take Screen shot for user registartion success
        await expect(this.registerPages.page).toHaveScreenshot('Register_Page.png',{maxDiffPixels: 800})
    }
}