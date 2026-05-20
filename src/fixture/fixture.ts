import { test as base, expect } from "@playwright/test";
import { registerAction } from "../action/registerAction";
import testdata from "../testdata/register.json";
import { Addtocart } from "../page/addtocartPage";
import { CartAction } from "../action/addtocartAction";

type appActions = {
    register: registerAction;
    addtocart: CartAction;
}

type Fixtures = {
    appActions : appActions;
}

export const test = base.extend<Fixtures>({
    appActions: async ({page}, use) => {
        const appActions: appActions = {
            register : new registerAction(page),
            addtocart: new CartAction(new Addtocart(page)),
        }
        await use(appActions);
    }

})

export{expect};