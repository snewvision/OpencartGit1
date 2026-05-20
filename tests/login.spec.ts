import { test, expect } from "../src/fixture/fixture";
import testdata from "../src/testdata/loginPage.json"

test("test user login functionality", async({appActions, page}) => {
    // call the login user action
    await page.goto(testdata.BaseURL);
    await appActions.login.loginUser(testdata.LoginDetails)
});

test("test user login functionality with incorrect credentials", async({appActions, page}) => {
    // call the login user action with incorrect credentials
    await page.goto(testdata.BaseURL);
    await appActions.login.loginUserWithIncorrectCredentials(testdata.incorrectLoginDetails);
});