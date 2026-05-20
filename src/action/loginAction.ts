import {Page, expect} from "@playwright/test";
import {loginPage} from "../page/loginPage";

type LoginDetails = 
{
    EmailAddress : string,
    Password : string;
}

type incorrectLoginDetails = 
{
    EmailAddress : string,
    Password : string;
}

export class loginAction
{
    private readonly loginPages : loginPage;

    constructor(page: Page)
    {
        this.loginPages = new loginPage(page);
    }

    async loginUser(testdata: LoginDetails)
    {
        await this.loginPages.myAccountDropdown.click()
        await this.loginPages.loginDropDown.click();
        
        // Validate the login page is visible
        await expect(this.loginPages.loginLogo).toBeVisible();

        // fill the login form
        await this.loginPages.email.fill(testdata.EmailAddress);
        await this.loginPages.password.fill(testdata.Password);

        //click the login button
        await this.loginPages.loginButton.click();

        // validate the login success by checking the presence of logout option in my account dropdown
        await this.loginPages.myAccountDropdown.click()
        await expect(this.loginPages.logoutDropDown).toBeVisible();

        // take Screen shot for user login success
        await expect(this.loginPages.page).toHaveScreenshot('Login_Success.png',{maxDiffPixels: 800})
    }

    async loginUserWithIncorrectCredentials(testdata: incorrectLoginDetails)
    {
        await this.loginPages.myAccountDropdown.click()
        await this.loginPages.loginDropDown.click();
        // Validate the login page is visible
        await expect(this.loginPages.loginLogo).toBeVisible();

        // fill the login form
        await this.loginPages.email.fill(testdata.EmailAddress);
        await this.loginPages.password.fill(testdata.Password);

        // click the login button
        await this.loginPages.loginButton.click();

        // validate the login error message
        await expect(this.loginPages.loginErrorMessage).toBeVisible();

        // take Screen shot for user login failure
        await expect(this.loginPages.page).toHaveScreenshot('Login_Failure.png',{maxDiffPixels: 800})

    }
}