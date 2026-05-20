import { test as base, expect } from "@playwright/test";
import { registerAction } from "../action/registerAction";
import testdata from "../testdata/register.json";

type appActions = {
    register: registerAction;
}

type Fixtures = {
    appActions : appActions;
}

export const test = base.extend<Fixtures>({
    appActions: async ({page}, use) => {
        const appActions: appActions = {
            register : new registerAction(page)
        }
        await use(appActions);
    }

})

export{expect};