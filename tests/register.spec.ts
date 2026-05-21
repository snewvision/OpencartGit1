import {test,expect} from "../src/fixture/fixture";
import testdata from "../src/testdata/register.json"

test("Register a new user", async({appActions,page,randomUser}) => {
  // call the register user action
  await page.goto(testdata.BaseURL);
  await page.waitForLoadState();
  await appActions.register.registerUser(randomUser);

});



