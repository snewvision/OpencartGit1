import {Page, Locator} from "@playwright/test";

export class registerPage
{

    readonly page: Page;
    readonly registerLogo: Locator
    readonly firstName: Locator
    readonly lastName: Locator
    readonly email: Locator
    readonly password: Locator
    readonly checkBox: Locator
    readonly continueRegisterButton: Locator
    readonly registerSuccessMessage: Locator

    constructor(page: Page) {
        this.page = page;
        this.registerLogo = page.locator('//h1[contains(text() , "Register Account")]');
        this.firstName = page.locator('//input[contains(@placeholder,"First Name")]');
        this.lastName = page.locator('//input[contains(@placeholder,"Last Name")]');
        this.email = page.locator('//input[contains(@placeholder,"E-Mail")]');
        this.password = page.locator('//input[contains(@placeholder,"Password")]');
        this.checkBox = page.locator('//div[@class="form-check form-switch form-switch-lg form-check-reverse form-check-inline"]//input[@value="1"]')
        this.continueRegisterButton = page.locator('//button[contains(text(),"Continue")]');
        this.registerSuccessMessage = page.locator('//p[contains(text(), "Congratulations! Your new account has been successfully created!")]');


    }
}
