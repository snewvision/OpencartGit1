import {Page, Locator} from "@playwright/test";

export class registerPage
{

    readonly page: Page;
    readonly myAccountDropdown: Locator
    readonly registerDropDown : Locator
    readonly registerLogo: Locator
    readonly firstName: Locator
    readonly lastName: Locator
    readonly email: Locator

    readonly telePhone: Locator

    readonly password: Locator
    readonly confirmPassword: Locator
    readonly checkBox: Locator

    readonly continueRegisterButton: Locator
    readonly registerSuccessMessage: Locator

    constructor(page: Page) {
        this.page = page;
        this.myAccountDropdown = page.locator('//span[contains(text(), "My Account")]');
        this.registerDropDown = page.locator('//a[contains(text(), "Register")]');
        this.registerLogo = page.locator('//h1[contains(text() , "Register Account")]');
        this.firstName = page.locator('//input[contains(@placeholder,"First Name")]');
        this.lastName = page.locator('//input[contains(@placeholder,"Last Name")]');
        this.email = page.locator('//input[contains(@placeholder,"E-Mail")]');

        this.telePhone = page.locator('//input[contains(@placeholder,"Telephone")]');

        this.password = page.locator('//input[@id="input-password"]');
        this.confirmPassword = page.locator('//input[contains(@placeholder,"Password Confirm")]');
        this.checkBox = page.locator('//input[@type="checkbox"]')
        this.continueRegisterButton = page.locator('//input[contains(@value,"Continue")]');
        this.registerSuccessMessage = page.locator('//p[contains(text(), "Congratulations! Your new account has been successfully created!")]');


    }
}
