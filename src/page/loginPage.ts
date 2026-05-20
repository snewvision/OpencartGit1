import {Page, Locator} from "@playwright/test";

export class loginPage{
    readonly page: Page;
    readonly myAccountDropdown: Locator
    readonly loginDropDown : Locator
    readonly loginLogo: Locator
    readonly email: Locator
    readonly password: Locator
    readonly loginButton: Locator
    readonly logoutDropDown: Locator
    readonly loginErrorMessage: Locator

    constructor(page:Page)
    {
        this.page = page;
        this.myAccountDropdown = page.locator('//span[contains(text(), "My Account")]');
        this.loginDropDown = page.locator('//a[contains(text(), "Login")]');
        this.loginLogo = page.locator('//h2[contains(text() , "Returning Customer")]');
        this.email = page.locator('//input[@id="input-email"]');
        this.password = page.locator('//input[@id="input-password"]');
        this.loginButton = page.locator('//input[@value="Login"]');
        this.logoutDropDown = page.locator('//ul[@class="dropdown-menu dropdown-menu-right"]//a[contains(text(), "Logout")]');
        this.loginErrorMessage = page.locator('//div[@class="alert alert-danger alert-dismissible"]')
    
    }
}