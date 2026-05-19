import {Page, expect} from '@playwright/test';
import {registerPage} from '../page/registerPage';
import testdata  from "../testdata/register.json"

// type RegisterDetails = {
//     FirstName : string,
//     LastName : string,
//     Email : string,
//     Password : string
// }

export class registerAction{
    private readonly registerPages: registerPage;

    constructor(page: Page){
        this.registerPages = new registerPage(page);
    }

    async registerUser(testdata: any)
    {
        // Validate the register page is visible
        await expect(this.registerPages.registerLogo).toBeVisible();

        // fill the register form
        await this.registerPages.firstName.fill(testdata.FirstName.toString());
        await this.registerPages.lastName.fill(testdata.LastName.toString());
        await this.registerPages.email.fill(testdata.Email.toString());
        await this.registerPages.password.fill(testdata.Password.toString());

        //click the check box
        await this.registerPages.checkBox.click();

        // click the continue button
        await this.registerPages.continueRegisterButton.click();
        
        // validate the register success message
        await expect(this.registerPages.registerSuccessMessage).toBeVisible();

        // take Screen shot for user registartion success
        await expect(this.registerPages.page).toHaveScreenshot('Register_Page.png',{maxDiffPixels: 800})
    }
}