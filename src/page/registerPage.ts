import {Page, Locator} from "@playwright/test";

export class registerPage
{

    readonly page: Page;
    readonly firstName: Locator
    readonly lastName: Locator
    readonly email: Locator
    readonly password: Locator
    readonly continueRegisterButton: Locator

    constructor(page: Page) {
        this.page = page;
        this.firstName = page.locator('//input[contains(@placeholder,"First Name")]');
        this.lastName = page.locator('//input[contains(@placeholder,"Last Name")]');
        this.email = page.locator('//input[contains(@placeholder,"E-Mail")]');
        this.password = page.locator('//input[contains(@placeholder,"Password")]');
        this.continueRegisterButton = page.locator('//button[contains(text(),"Continue")]');


    }
}