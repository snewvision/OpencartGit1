import {test} from "../src/fixture/fixture";
import testdata from "../src/testdata/register.json"

test("Register anew user", async({appActions}) => {
  // call the register user action
  await appActions.register.registerUser(testdata);

});


