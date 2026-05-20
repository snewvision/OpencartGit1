import { test as base, expect } from "@playwright/test";
import { registerAction } from "../action/registerAction";
import testdata from "../testdata/register.json";
import { Addtocart } from "../page/addtocartPage";
import { CartAction } from "../action/addtocartAction";
import { loginAction } from "../action/loginAction";

type appActions = {
    register: registerAction;
    addtocart: CartAction;
    login: loginAction;
}

type Fixtures = {
    appActions : appActions;
}

export const test = base.extend<Fixtures>({
    appActions: async ({page}, use) => {
        const appActions: appActions = {
            register : new registerAction(page),
            addtocart: new CartAction(new Addtocart(page)),
            login : new loginAction(page)
        }
        await use(appActions);
    }

})

export{expect};